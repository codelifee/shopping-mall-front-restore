export default function ValidateInfo2(form){
    let errors2 = {}

    if(!form.user_pwd.trim()){
        errors2.user_pwd = '비밀번호를 입력하세요.';
    }else if(form.user_pwd.length < 8){
        errors2.user_pwd = '비밀번호는 8자리 이상으로 입력하세요.';
    }

    if(!form.user_pwd2.trim()){
        errors2.user_pwd2 = '비밀번호 확인을 입력하세요.';
    }else if(form.user_pwd2 !== form.user_pwd){
        errors2.user_pwd2 = '일치하지 않은 비밀번호입니다.';
    }

    if(!form.user_name.trim()){
        errors2.user_name = '이름을 입력하세요.';
    }

    if(!form.user_phone.trim()){
        errors2.user_phone = '전화번호를 입력하세요.'
    }else if(!/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/.test(form.user_phone)){
        errors2.user_phone = '전화번호 형식으로 입력하세요.';
    }
    
    if(!form.user_address.trim()){
        errors2.user_address = '주소를 입력하세요.';
    }

    return errors2;
}

