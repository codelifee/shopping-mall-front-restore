export default function ValidateSignUpInfo(values,customer){
    let errors = {};

    if(!values.user_id.trim()){
        errors.user_id = "아이디를 입력하세요.";
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.user_id)){
        errors.user_id = '아이디를 이메일 형식으로 입력하세요.';
    }else{
        for(let i=0;i<customer.length;i++){
            if(values.user_id == customer[i].user_id){
                errors.user_id = "사용불가능한 아이디입니다.";
                break;
            }
        }
    }

    if(!values.user_pwd.trim()){
        errors.user_pwd = '비밀번호를 입력하세요.';
    }else if(values.user_pwd.length < 8){
        errors.user_pwd = '비밀번호는 8자리 이상으로 입력하세요.';
    }

    if(!values.user_pwd2.trim()){
        errors.user_pwd2 = '비밀번호 확인을 입력하세요.';
    }else if(values.user_pwd2 !== values.user_pwd){
        errors.user_pwd2 = '일치하지 않은 비밀번호입니다.';
    }

    if(!values.user_name.trim()){
        errors.user_name = '이름을 입력하세요.';
    }

    if(!values.user_phone.trim()){
        errors.user_phone = '전화번호를 입력하세요.'
    }else if(!/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/.test(values.user_phone)){
        errors.user_phone = '전화번호 형식으로 입력하세요.';
    }else{
        for(let i=0;i<customer.length;i++){
            if(values.user_phone == customer[i].user_phone){
                errors.user_phone = "사용불가능한 전화번호입니다.";
                break;
            }
        }
    }
    
    if(!values.user_address.trim()){
        errors.user_address = '주소를 입력하세요.';
    }

    return errors;
}