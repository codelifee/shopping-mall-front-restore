import React, {useState} from 'react';
import './StarRating.css';
import { FaStar } from 'react-icons/fa';

function StarRating(){
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);

	return(
		<div className="stars">
			{
				[...Array(5)].map((star,i) => {
					const ratingValue = i + 1;

					return (
						<label>
							<input 
								type="radio" 
								name="rating" 
								value={ratingValue}
								onClick={()=>setRating(ratingValue)}
								
								/>
							<FaStar 
								className="star" 
								color={ratingValue <= (hover||rating) ? "#ffc107" : "#e4e5e9"} 
								size={100}
								onMouseEnter={()=>setHover(ratingValue)}
								onMouseLeave={()=>setHover(null)}
							/>
						</label>
					);
				})}
				<p>the rating is {rating}</p>
		</div>
	)
}
export default StarRating;