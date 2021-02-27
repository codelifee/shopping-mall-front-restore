import React,{useState, useEffect} from 'react';
import './ReviewForm.css';
import { FaStar } from 'react-icons/fa'
import {useStateValue} from '../StateProvider/StateProvider';
import axios from '../axios/axios';
import {useHistory, useLocation, useParams} from 'react-router-dom';

function ReviewForm(){

const history = useHistory();

const [rating, setRating] = useState(null);
	
const [hover, setHover] = useState(null);

const {id} = useParams(); //review_id

const [reviews, setReviews] = useState([]);

useEffect(() => {
    async function fetchDate() {
      const request = await axios
      .get(`review/${id}`)
      .then((response) => setReviews(response.data))
      .catch((error) => console.log(error));
      
      return request;
    }
    
    fetchDate();
  }, []);

const formData = new FormData();

    formData.append('review_picture', reviews.review_picture)

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    const handleChange = e => {
        e.preventDefault()

        if (e.target.name == "star") {
            setReviews({
                ...reviews,
                [e.target.name]: parseInt(e.target.value) 
            })
        } else {
            setReviews({
                ...reviews,
                [e.target.name]: e.target.value 
            })
        }

    }

    const handleFileChange = e => {
        e.preventDefault()

        setReviews({
            ...reviews,
            [e.target.name]: e.target.files[0]
        })
    }

    const updateForm = (e) => {
        e.preventDefault();
        //삼항연산자로 사진이 null이면 글만 넘어가는 post로
        //null이 아니면 아래 post로 동작하게 만들기
        if(reviews.review_picture!=null){
            return (axios.patch(`/review/image/${id}`, formData, config)
            .then(res => console.log(res))
            .catch(err => console.log(err)))&&
            (axios.patch(`/review/${id}`, {review:reviews.review,
                star: reviews.star
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
            )
        }else{
            axios.patch(`/review/${id}`, reviews)
            .then(res => console.log(res))
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
								type="radio" 
								name="rating" 
								value={ratingValue}
								onClick={()=>reviews.star=ratingValue}              
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

            <form className="review_form" onSubmit={reviews.review != '' ? updateForm : null}> 
                <label htmlFor="input">리뷰 작성</label>
              
                <input 
                id="input"
                type="text" 
                name="review"
                value={reviews.review}
                onChange={handleChange}
                />

                <div className="file_upload">
                   
                    <input 
                    type="file" 
                    id="file_upload"
                    name="review_picture" 
                    file={reviews.review_picture} 
                    multiple onChange={handleFileChange}/>
                    
                </div>    
            
                {console.log(reviews)}

            <div className="button">
                
            <button type="submit" onClick={()=>{
                
                reviews.review == '' ? alert("내용을 입력해주세요!") : alert("내용이 입력됐습니다.");
                    /* window.close()*/} 
                
                }>Submit</button>
                
            </div>
            </form>
         </div>
     );
 }

 export default ReviewForm;