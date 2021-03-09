import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from '../axios/axios';
import './Detail_data.css';

 function Detail_data(){

   const {id} = useParams();
    const info_img = `https://api.xn--vx3b30no7b.com/products/showInfoImage/${id}`;
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
              <img src={info_img} alt="디테일" className="detail_img"/>
         </div>
     )
 }


 export default Detail_data;