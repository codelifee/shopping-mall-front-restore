import React, {useState, useEffect} from 'react'
import './SellerProducts.css'
import SellerProduct from "./SellerProduct"
import axios from '../axios/axios'
import {Link} from 'react-router-dom'

function SellerProducts() {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchDate() {
            const request = await axios.get('products/allJsonData')
            .then(response => 
                setProducts(response.data)
            )
            .catch(error => console.log(error))
                       
            return request;
        }


        fetchDate();
    }, [])

    const handleDelete = (id) => {

        axios.delete("products/" + id)
        .then(res => {console.log(res)
            window.location.reload(false)
            alert('삭제가 완료 되었습니다')
        })
        .catch(err => console.log(err))
    }
    
       
    return (
        <div className="sellerProduct">
            <div className="sellerProduct__container">
                <div className="sellerProduct__search">
                    <form className="sellerProduct__form">
                        <div className="sellerProduct__searchbar">
                          <div className="sellerProduct__button">
                            <button className="sellerProduct__search-button">검색</button>
                            <button className="sellerProduct__reset-button">초기화</button>
                        </div>
                        <input 
                            type="text" className="sellerProduct__input"
                            onChange={e => {setSearchTerm(e.target.value)}}
                            /> <label className="sellerProduct__label">카테고리</label> 
                            <select  className="sellerProduct__select">
                                <option value="Product Name">상품명</option>
                            </select>
                            
                            
                            <select name="categories" id="categories" className="sellerProduct__select">
                                <option value="1">의자</option>
                                <option value="2">서랍</option>
                                <option value="3">책상</option>
                            </select>
                           
                        </div>
                        
                    </form>
                </div>
                <div className="sellerProduct__info">
                    <h2> 등록된 총 상품 개수: {products.length} 개 </h2>
                    <Link to="/seller/addProduct">
                    <button className="Button">+ 상품 등록</button>
                    </Link>
                    
                </div>
                <div className="sellerProduct__table_bg">
                    <table className="sellerProduct__table">
                            <thead>
                                <th>상품명</th>
                                <th>판매가</th>
                                <th>재고수량</th>
                                
                                <th>상품삭제</th>
                                <th>상품수정</th>
                            </thead>
                            <tbody>
                            {products.filter(val => {
                                if (searchTerm == "") {
                                    return val
                                } 
                                else if (val.product_name.toLowerCase().includes(searchTerm.toLowerCase())) 
                                {
                                    return val
                                }
                            }
                            ).map(product => (
                                <SellerProduct 
                                key={product.product_id}
                                id={product.product_id}
                                name={product.product_name}
                                price={product.product_price}
                                handleDelete={handleDelete}
                                stock={product.stock}
                                />
                            ))}
                            </tbody>
                 </table> 
                </div>
            </div>
        </div>
        
    )
}

export default SellerProducts