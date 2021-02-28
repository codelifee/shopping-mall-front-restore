import './Home.css';
import React from 'react';
import Recommendation from './Recommendation'
import Best from './Best'
import Category from './Category'
import New from './New'
import axios from '../axios/axios';

function Home() {
    return (
        <div className="home">
                <div className="home__row">
                    <Category />
                    <Best />
                    <Recommendation />
                    <New/> 
                </div>
                
                {/* <button className="btn btn-primary" onClick={()=>{
                    axios.get('요청json')
                    .then(()=>{})//성공했을때 
                    .catch(()=>{})//실패했을떄

                }}>더보기</button> */}
        </div>
    )
}

export default Home;
