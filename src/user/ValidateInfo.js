export default function ValidateInfo(values){
    let errors = {};

    if(!values.user_pwd.trim()){
        errors.user_pwd = '비밀번호를 입력하세요.';
    }else if(values.user_pwd.length < 8){
        errors.user_pwd = '비밀번호는 8자리 이상으로 입력하세요.';
    }

    if(!values.user_name.trim()){
        errors.user_name = '이름을 입력하세요.';
    }

    if(!values.user_phone.trim()){
        errors.user_phone = '전화번호를 입력하세요.'
    }else if(!/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/.test(values.user_phone)){
        errors.user_phone = '전화번호 형식으로 입력하세요.';
    }
    
    if(!values.user_address.trim()){
        errors.user_address = '주소를 입력하세요.';
    }

    return errors;
}