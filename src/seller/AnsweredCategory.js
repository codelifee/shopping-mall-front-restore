import React, {useState, useEffect} from "react";
import './AnswerYetCategory.css'
import {FaSearch} from 'react-icons/fa';
import DatePicker from "react-datepicker";
import axios from '../axios/axios'
import {useHistory} from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";
import { Category } from '@material-ui/icons';

function Answered(){
    const [startDate, setStartDate] = useState(new Date());

    //카테고리 정보 저장 state
    const [categories, setCategories] = useState([]);

    //페이지 이동
    const history = useHistory();

    useEffect(() => {
        async function fetchDate() {
            const request = await axios.get('categories/all')
            .then(response => 
                setCategories(response.data)
            )
            .catch(error => console.log(error))
            
            return request;
        }

        console.log(categories);

        fetchDate();
    }, [])

    

    return (
        <div className="category">
            <div className="category__container">
                <div className="products__search">
                <div className="products__button">
                    <button className="products__search-button">Search</button>
                    <button className="products__reset-button">Reset</button>
                </div>
                    <form className="products__searchbar">
                        <input type="text" className="products__input" />
                        <FaSearch className="search-icon"/>
                    </form>
                    <div className="answer__category">
                        <p>Answer Creation Date</p>
                        <DatePicker
                        className="datepicker_date"
                        selected={startDate} 
                        onChange={date => setStartDate(date)} />
                    </div>
                </div>
                
                <div className="question__info">
                    <h2>0 Questions</h2>
                </div>
                <div className="category__table_bg">
                    <table className="category__table">
                        <thead>
                            <th>Category Name</th>
                        </thead>
                        <tbody>
                            {categories.map((category)=>{
                                return(
                                    <tr key={category.category_id}>
                                        <td>
                                            <span onClick={
                                                ()=>{
                                                    history.push(
                                                        `/seller/answeredProducts/${category.category_id}`
                                                    )
                                                }
                                            }>
                                                {category.category_name}
                                            </span>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Answered;