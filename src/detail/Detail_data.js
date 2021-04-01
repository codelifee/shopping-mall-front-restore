import React from 'react';
import {useParams} from 'react-router-dom';
import './Detail_data.css';
import {ImageData} from '../axios/urlData';

 function Detail_data(){

   const {id} = useParams();
   let image = ImageData.image2 + id
   
   return (
       <div>
           <img src={image} alt="" className="detail_img"/>
       </div>
      )
 }


 export default Detail_data;