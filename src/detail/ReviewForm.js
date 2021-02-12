import React,{useState} from 'react';
import './ReviewForm.css';
import { FaStar } from 'react-icons/fa'
import {useStateValue} from '../StateProvider/StateProvider';
import axios from '../axios/axios';
import {useHistory, useLocation, useParams} from 'react-router-dom';
import qs from 'query-string';

 function ReviewForm(){

const history = useHistory();

const [rating, setRating] = useState(null);
	
const [hover, setHover] = useState(null);

const id = useParams();

const formData = new FormData();

    const [form, setForm] = useState({
        review_id: 5,
        product_id: 1,
        user_sequence_id: 6,
        product_detail_id: 1,
        review: '',
        star: 0,
        review_picture: '사진',
        review_date_created: '2021-02-10',
        product_name: '녹색 의자',
        productDetailsList: '녹색의 의자'
        }
    )

    formData.append('review_id', form.review_id)
    formData.append('product_id',form.product_id)
    formData.append('user_sequence_id',form.user_sequence_id)
    formData.append('product_detail_id',form.product_detail_id)
    formData.append('review',form.review)
    formData.append('star',form.star)
    formData.append('review_picture', new Blob([JSON.stringify(form.review_picture)])
    , { type: "application/json" })
    formData.append('review_date_created',form.review_date_created)
    formData.append('product_name',form.product_name)
    formData.append('productDetailsList',form.productDetailsList)

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
        
         axios.post('/review', formData, config)
        .then(res => console.log(res))
        .catch(err => console.log(err))
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

            <form className="review_form" onSubmit={showForm}> 
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
                <button type="submit" onClick={history.goBack}>Submit</button>
            </div>
            </form>
         </div>
     );
 }

 export default ReviewForm;