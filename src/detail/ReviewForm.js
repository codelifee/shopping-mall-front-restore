// import React,{useState} from 'react';
// import {useStateValue} from '../StateProvider/StateProvider';
// import axios from '../axios/axios';

// function ReviewForm(){
//     //const [{user}, dispatch] = useStateValue(); 
//     const [contents, setContents] = useState('');
//     const [form, setForm] = useState('');
//     const [prouducts, setProducts] = useState([]);

//     // axios.get('products/all')
//     // .then(response =>setProducts(response.data))
//     // .catch(error => console.log(error))


//     return(
//         <div clssName="ReviewForm">
//              <input onChange={(e)=>{ setForm(e.target.value)}} />
//             <button onClick={()=>{
//           var contentsCopy = [...contents];
//           contentsCopy.unshift(form);
//           setContents(contentsCopy);

//         //   axios.post('/reviews', {
//         //     review_id: 1,
//         //     user_id: {user},
//         //     contents: {contents},
//         //     review_picture: 'url',
//         //     review_data_created: 'date'
//         // })   
          
//         }}>저장</button>
//         </div>
//     );
// }

// export default ReviewForm();