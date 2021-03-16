import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from '../axios/axios';
import './Detail_data.css';
import {ImageData} from '../axios/urlData';

 function Detail_data(){

   const {id} = useParams();
   let image = ImageData.image2 + id
     const [products, setProducts] = useState([]);
     useEffect(()=>{
          async function fetchDate() {
            const request = await axios.get(`products/${id}`)
            .then(response =>
                  setProducts(response.data)
                  )
                  .catch(error => console.log(error))
                  
                  return request;
                }
                
                fetchDate();
              }, [])
     return (
         <div>
              <img src={image} alt="" className="detail_img"/>
         </div>
     )
 }


 export default Detail_data;