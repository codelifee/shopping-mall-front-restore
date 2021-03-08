import React, {useState, useEffect} from 'react';
import './Product_info.css';
import axios from '../axios/axios';
import {useParams} from 'react-router-dom';

function Product_info() {

    const {id} = useParams();
    const quality_img = `https://api.xn--vx3b30no7b.com/products/showQualityImage/${id}`;
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

    return(
        <div className="info">
            <h3>상품정보 고시</h3>
            <img src={quality_img} alt="상품고시" className="detail_img"/>
            {/* <hr/>
            <dl>
                <dt>용량/중량</dt> 
                <dd>215ml</dd>
            </dl>
            <hr/>
            <dl>
                <dt>제품 주요 사양</dt> 
                <dd>모든 피부</dd>
            </dl>
            <hr/>
            <dl>
                <dt>사용 기한</dt> 
                <dd>36개월</dd>
            </dl>
            <hr/>
            <dl>
                <dt>사용 방법</dt> 
                <dd>상품 상세 설명 참조</dd>
            </dl>
            <hr/>
            <dl>
                <dt>제조업자 및 책임판매업자</dt> 
                <dd>코스맥스(주) / (주)에이블씨엔씨</dd>
            </dl>
            <hr/>
            <dl>
                <dt>제조국</dt> 
                <dd>한국</dd>
            </dl>
            <hr/>
            <dl>
                <dt>전성분</dt> 
                <dd>효모발효추출물, 1 ,2-헥산다이올, 나이아신아마이드, 비피다발효용해물, 쌀추출물,
                    에틸석시네이트, 프로판다이올, 소듐피씨에이, 에틸헥실글리세린, 아데노산
                </dd>
            </dl>
            <hr/>
            <dl>
                <dt>식품의약품안전청 심사 필 유무</dt> 
                <dd>해당사항 없음</dd>
            </dl>
            <hr/>
            <dl>
                <dt>사용상 주의사항</dt> 
                <dd>화장품 사용 시 또는 사용 후 직사광선에 의하여 사용부위가 붉은 반점, 부어오름 또는 가려움증 등의 이상 증상이나 부작용이 있는 경우 전문의 등과 상담할 것</dd>
            </dl>
            <hr/>
            <dl>
                <dt>품질보증기준</dt> 
                <dd>본 제품에 이상이 있을 경우 공정거래위원회 고시 '소비자분쟁해결기준'에 의하여 보상해드립니다.</dd>
            </dl>
            <hr/> */}
        </div>
    )
}

export default Product_info;