import React, {useState} from 'react';
import './UpdateStarRating.css';
import { FaStar } from 'react-icons/fa';

function UpdateStarRating(props){
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);

	return(
		<div className="stars">
			{[...Array(5)].map((star, i) => {
            
			const ratingValue = i + 1;
  
			return (
			  <label key={i}>
				<input
				  className="input_radio"
				  type="radio"
				  name="rating"
				  value={ratingValue}
				  onClick={() => (props.review.star = ratingValue)}
				/>
				<FaStar
				  className="star"
				  color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
				  size={100}
				  onMouseEnter={() => setHover(ratingValue)}
				  onMouseLeave={() => setHover(ratingValue)}
				/>
  
				<p className="stars_score"> {ratingValue} 점 </p>
			  </label>
			);
		  })}
		</div>
	)
}
export default UpdateStarRating;