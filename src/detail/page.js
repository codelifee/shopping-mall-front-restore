import React ,{useState} from 'react';
import styled from 'styled-components';

const Paging = styled.div`
    margin-top: 12px;
    text-align: center;
`;
const PageBtn = styled.button`
    height: 34px;
    border: 1px solid #d5d5d5;
    border-radius: 6px;
    padding: 0 12px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
`;
const On = styled.div`
    background: pink;
`;
const createArr = (n)=>{
    const iArr = new Array(n);
    for(var i =0; i < n; i++)  iArr[i] = i+1;
    return iArr;
}

function BoardPage({ maxPage,pageLimit}){

    const [blockNum , setBlockNum] = useState(0);
    const [currPage, setCurrPage] = useState(1);

    const v = Number (blockNum * pageLimit);
    const iArr = createArr(Number(maxPage));
    let pArr = iArr.slice(v, Number(pageLimit)+ v);

    const firstPage=()=>{
        setBlockNum(0);
        setCurrPage(1);
    }
    const lastPage=()=>{
        setBlockNum( Math.ceil(maxPage/pageLimit) - 1)
        setCurrPage(maxPage);
    }
    const prevPage=() =>{
        if(currPage <= 1)     
            return;
        if((currPage - 1) <= pageLimit * blockNum){
            setBlockNum(n=>n-1);
        }
        setCurrPage(n => n - 1);
    }
    const nextPage =()=>{
        if(currPage >= maxPage)       
           return;
        if(pageLimit * Number(blockNum + 1) < Number(currPage + 1)){
            setBlockNum(n=>n+1);
        }
        setCurrPage(n => n + 1);       
    }
    return (

        <Paging>
            <h1>currPage : {currPage}</h1>
            <h2>blockNum : {blockNum}</h2>
            <PageBtn onClick = {firstPage}>&lt;&lt;</PageBtn>
            <PageBtn onClick = {prevPage}>&lt;</PageBtn>

            <>
                 {
                    pArr.map(n =>(
                       <PageBtn>
                            {n}
                       </PageBtn> 
                    ))                   
                } 
            </>
            <PageBtn onClick = {nextPage}>&gt;</PageBtn>
            <PageBtn onClick ={lastPage}>&gt;&gt;</PageBtn>
        </Paging>
    );
}

export default BoardPage;