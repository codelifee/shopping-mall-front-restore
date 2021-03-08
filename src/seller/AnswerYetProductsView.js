import React, {useState, useEffect} from 'react'
import './SellerProduct.css'
import {Link, useHistory} from 'react-router-dom';
import {ImageData} from '../axios/urlData';

function AnswerYetProductsSearch({picture, name, description, question, id}) {

    
    let image = ImageData.image1 + id
    
    // console.log(ImageData)

    const history = useHistory();
    return (
        <>
        
        <tr>
            <td><img src={image} alt="image"/></td>
            <td>{name}</td>
            <td>{description}</td>
            <td>
                <span onClick={()=>{
                    history.push(`/seller/answerYetQuestions/${id}`)
                }}>
                    {question}
                </span>
            </td>
        </tr>       
        </>
    )
}

export default AnswerYetProductsSearch;