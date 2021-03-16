import React,{useState} from 'react';
import './ReviewForm.css';
import { FaStar } from 'react-icons/fa'
import axios from '../axios/axios';
import {useHistory, useParams} from 'react-router-dom';
import Cookies from 'js-cookie';

 function ReviewForm(){

const [cookie, setCookie] = useState();

const [rating, setRating] = useState(null);
	
const [hover, setHover] = useState(null);

const {id} = useParams();

const formData = new FormData();
const getCookie = () => {
    const cookie = Cookies.get("user");
    console.log(cookie);
    setCookie(cookie);
  }

    const [form, setForm] = useState({
        review_id: '',
        product_id: id,
        user_sequence_id:cookie, //로그인 한 user의 user_sequence_id넣기
        //if review 안에 있는 user정보와 로그인된 user 정보 같으면 중복 작성 안 됨.
        review: '',
        star: 0,
        review_picture: null,
        review_date_created: '',
        user_id:''
        }
    )



    formData.append('review_id', form.review_id)
    formData.append('product_id',form.product_id)
    formData.append('user_sequence_id',form.user_sequence_id)
    formData.append('review',form.review)
    formData.append('star',form.star)
    formData.append('review_picture', form.review_picture)
    formData.append('review_date_created',form.review_date_created)
    formData.append('user_id', form.user_id)

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    const handleChange = e => {
        e.preventDefault()

        if (e.target.name == "star") {
            setForm({
                ...form,
                [e.target.name]: parseInt(e.target.value) 
            })
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value 
            })
        }

    }

    const handleFileChange = e => {
        e.preventDefault()

        setForm({
            ...form,
            [e.target.name]: e.target.files[0]
        })
    }

    const showForm = (e) => {
        e.preventDefault();
        //삼항연산자로 사진이 null이면 글만 넘어가는 post로
        //null이 아니면 아래 post로 동작하게 만들기
        if(form.review_picture!==null){
            return axios.post('/review/upload', formData, config)
            .then(res => console.log(res), window.opener.parent.location.reload())
            .catch(err => console.log(err))
        }else{
            axios.post('/review', form)
            .then(res => console.log(res), window.opener.parent.location.reload())
            .catch(err => console.log(err))
        }
    }


     return(
         <div className="ReviewForm">
    
             <div className="stars">
			{
				[...Array(5)].map((star,i) => {
					const ratingValue = i + 1;
                    
					return (
						<label key={i}>
							<input 
                            className="input_radio"
								type="radio" 
								name="rating" 
								value={ratingValue}
								onClick={()=>form.star=ratingValue}              
							/>
							<FaStar 
								className="star" 
								color={ratingValue <= (hover||rating) ? "#ffc107" : "#e4e5e9"} 
								size={100}
								onMouseEnter={()=>setHover(ratingValue)}
								onMouseLeave={()=>setHover(ratingValue)}
							/>
                            
                            <p className="stars_score"> {ratingValue} 점 </p> 
						</label>
					);
				})}
		    </div>

            <form className="review_form" onSubmit={form.review !== '' ? showForm : null}> 
                <label htmlFor="input">리뷰 작성</label>
              
                <input 
                id="input"
                type="text" 
                name="review"
                value={form.review}
                onChange={handleChange}
                />

                <div className="file_upload">
                   
                    <input 
                    type="file" 
                    id="file_upload"
                    name="review_picture" 
                    file={form.review_picture} 
                    multiple onChange={handleFileChange}/>
                    
                </div>    
            
            

                {console.log(form)}

            <div className="button">
                
            <button type="submit" onClick={()=>{
                
                    form.review == '' ? alert("내용을 입력해주세요!") : alert("내용이 입력됐습니다.");
                
                
                   setTimeout("self.close()", 2000 );
                } 

                    
                
                }>Submit</button>
                
            </div>
            </form>
         </div>
     );
 }

 export default ReviewForm;