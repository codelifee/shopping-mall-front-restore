import {useState, useEffect} from 'react';
import axios from '../axios/axios';
import Cookies from "js-cookie";

const DeleteProfileData = (callback) => {

    const [user, setUser] = useState([]);
    const [check, setCheck] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const cookie = Cookies.get('user');
    const token = Cookies.get('jwt');

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`users/${cookie}`,
            {
                headers: {
                "Authorization" : `Bearer ${token}`
                }
            })
            .then(response => 
                setUser(response.data)
            )
            .catch(error => console.log(error))
           
            return request;
        }
        fetchData();
    }, [])
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`users/${cookie}`,
            {
                headers: {
                "Authorization" : `Bearer ${token}`
                }
            })
            .then(response => 
                setCheck(response.data)
            )
            .catch(error => console.log(error))
           
            return request;
        }
        fetchData();
    }, [])

    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        });
    };

    useEffect(() =>{
      if(Object.keys(errors).length === 0 && isSubmitting){
          callback();
      }
    },[])

    const useConfirm = (message = null, onConfirm, onCancel) => {
        if (!onConfirm || typeof onConfirm !== "function") {
          return;
        }
        if (onCancel && typeof onCancel !== "function") {
          return;
        }
      
        const confirmAction = () => {
          if (window.confirm(message)) {
            onConfirm();
          } else {
            onCancel();
          }
        };
      
        return confirmAction;
      };
      const deleteConfirm = () => { 
        if(check.user_pwd !== user.user_pwd){
            alert('비밀번호를 다시 입력하세요.');
            setErrors('비밀번호를 다시 입력하세요.');
            return false;
        }else{
            axios.delete(`users/${cookie}`,
            {
              headers: {
              "Authorization" : `Bearer ${token}`
              }
            })
            .then(alert("탈퇴가 완료되었습니다."))
            .catch(err => console.log(err))
            window.location.href="/home";
        }
        setIsSubmitting(true);
    };
      const cancelConfirm = () => alert('탈퇴가 취소되었습니다.');
      const confirmDelete = useConfirm(
        "탈퇴하시면 회원 정보를 복구할 수 없습니다. 삭제하시겠습니까?",
        deleteConfirm,
        cancelConfirm
      );

      return {handleChange, confirmDelete, user};

}
export default DeleteProfileData;