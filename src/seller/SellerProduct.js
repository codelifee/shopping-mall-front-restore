import React, {useState, useEffect} from 'react'
import axios from '../axios/axios'

function SellerProduct() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchDate() {
            const request = await axios.get('products/all')
            .then(response => 
                setProducts(response.data)
            )
            .catch(error => console.log(error))
            
            console.log(products)
            return request;
        }

        fetchDate();
    }, [])

    console.log(products)

    return (
        <div className="sellerproducts">
            <table>
                    <thead>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </thead>
                    <tbody>
                    {products.map(product => (
                        <tr>
                        <td>{product.product_name}</td>
                        <td>{product.product_price}</td>
                        <td>40
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </table>
        </div>
    )
}

export default SellerProduct
