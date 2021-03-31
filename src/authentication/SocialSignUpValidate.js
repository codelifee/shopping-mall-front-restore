export default function SocialSignUpValidate(values,phoneNadrress){
    let errors = {};
    if(!values.user_phone.trim()){
        errors.user_phone = '전화번호를 입력하세요.'
    }else if(!/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/.test(values.user_phone)){
        errors.user_phone = '전화번호 형식으로 입력하세요.';
    }else{
        for(let i=0;i<phoneNadrress.length;i++){
            if(values.user_phone == phoneNadrress[i].user_phone){
                errors.user_phone = "사용불가능한 전화번호입니다.";
                break;
            }
        }
    }
    
    if(!values.user_address.trim()){
        errors.user_address = '주소를 입력하세요.';
    }
}