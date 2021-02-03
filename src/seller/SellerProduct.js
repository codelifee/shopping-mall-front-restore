import React, {useState, useEffect} from 'react'

function SellerProducts() {

    return (
        <div className="sellerproducts">
            <table>
                    <thead>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>양파즙</td>
                        <td>3000</td>
                        <td>40
                        </td>
                        
                    </tr>
                    <tr>
                        <td>양파즙</td>
                        <td>3000</td>
                        <td>40</td>
                        
                    </tr>
                    <tr>
                        <td>양파즙</td>
                        <td>3000</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>양파즙</td>
                        <td>3000</td>
                        <td>40</td>
                    </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default SellerProducts
