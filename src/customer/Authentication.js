/* import $ from "jquery";

<회원 가입>
	1. 모든 정보 not null
	2. 아이디는 이메일 형식
	3. 아이디 중복 확인
	4. 비밀번호와 비밀번화 확인 일치하는지
	5. 전화번호 중복 확인

	<회원 정보 수정>
	1. 모든 정보 not null
	2. 기존 비밀번호와 일치하는지
	3. 전화번호 중복 확인


export function join_check(){
	if($.trim($("#user_id").val())===""){
		alert("아이디를 입력하세요!");
		$("#user_id").val("").focus();
		return false;
	}
	if($.trim($("#user_pwd").val()) === ""){
		alert("비밀번호을 입력하세요!");
		$("#user_pwd").val("").focus();
		return false;
	}
	if($.trim($("#user_pwd_check").val()) === ""){
		alert("비밀번호 확인을 입력하세요!");
		$("#user_pwd_check").val("").focus();
		return false;
	}
	if($.trim($("#user_pwd").val()) !== $.trim($("#user_pwd_check").val())){
		alert("비밀번호가 다릅니다!");
		$("#user_pwd").val("");//비번 입력박스를 초기화
		$("#user_pwd_check").val("");
		$("#user_pwd").focus();
		return false;
	}
    if($.trim($("#user_name").val())===""){
        alert("이름을 입력하세요!");
        $("#user_name").val("").focus();
        return false;
    }
    if($.trim($("#user_phone").val())===""){
		alert("폰번호를 입력하세요!");
		$("#user_phone").val("").focus();
		return false;
	}
	if($.trim($("#user_address").val())===""){
		alert("주소를 입력하세요!");
        $("#user_address").val("").focus()		
		return false;
	}
}
*/
// 중복아이디 검색
// export function id_check(){
//  /* copy begin */
// 	$("#idcheck").hide();
// 	//아이디 영역을 숨김
// 	$user_id=$.trim($("#user_id").val());
// 	//1.입력글자 길이 체크
// 	if($user_id.length < 4){
// 		$newtext='<font color="red" size="3"><b>아이디는 4자 이상이어야 합니다.</b></font>';
// 		$("#idcheck").text('');
// 		//idcheck 아이디 영역 문자열을 초기화
// 		$("#idcheck").show();
// 		//idcheck 아이디 영역을 보이게 함.
// 		$("#idcheck").append($newtext);
// 		//idcheck영역에 문자열을 추가
// 		$("#user_id").val('').focus();
// 		return false;
// 	};
// 	if($user_id.length > 12){
// 		$newtext='<font color="red" size="3"><b>아이디는12자 이하이어야 합니다.</b></font>';
// 		$("#idcheck").text('');
// 		//idcheck 아이디 영역 문자열을 초기화
// 		$("#idcheck").show();
// 		//idcheck 아이디 영역을 보이게 함.
// 		$("#idcheck").append($newtext);
// 		//idcheck영역에 문자열을 추가
// 		$("#user_id").val('').focus();
// 		return false;
// 	};
// 	//2.입력글자 확인
// 	if(!(validate_userid($user_id))){
// 		$newtext='<font color="red" size="3"><b>아이디는 영문소문자,숫자,_조합만 가능합니다.</b></font>';
// 		$("#idcheck").text('');
// 		$("#idcheck").show();
// 		$("#idcheck").append($newtext);
// 		$("#user_id").val('').focus();
// 		return false;
// 	};
// 	//아이디 중복확인
//     const [customer, setCustomer] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             const request = await axios.get('users/all')
//             .then(response => 
//                 setCustomer(response.data)
//             )
//             .catch(error => console.log(error))
           
//             return request;
//         }
//         fetchData();
//     }, [])
//     console.log(id)
//     console.log(customer)
//     $.ajax({//$는 jQuery란 뜻. $.ajax 뜻은 jQuery 내의 아작스 실행
//         type:"POST",//데이터를 서버로 보내는 방법
   
//         url:"userber_idcheck", //아작스 서버 주소 파일명
//         data: {"id":$user_id},  //좌측 id 피라미터 이름에 우측 $user_id변수값을 저장
//         datatype:"int",//서버의 실행된 결과값을 사용자로 받아오는 방법
//         success: function (data) {//success는 아작스로 받아오는것이 성공했을경우
//         	//서버 데이터를 data변수에 저장
//       	  if(data==1){//중복 아이디가 있다면
//       		$newtext='<font color="red" size="3"><b>중복 아이디입니다.</b></font>';
//       		$("#idcheck").text('');
//         	$("#idcheck").show();
//         	$("#idcheck").append($newtext);          		
//           	$("#user_id").val('').focus();
//           	return false;
	     
//       	  }else{//중복 아이디가 아니면
//       		$newtext='<font color="blue" size="3"><b>사용가능한 아이디입니다.</b></font>';
//       		$("#idcheck").text('');
//       		$("#idcheck").show();
//       		$("#idcheck").append($newtext);
//       		$("#user_pwd").focus();
//       	  }  	    	  
//         },
//     	  error:function(){//비동기식 아작스로 서버디비 데이터를
//     		  //못가져와서 에러가 발생했을 때 호출되는 함수이다.
//     		  alert("data error");
//     	  }
//       });//$.ajax
//  /* end */	
// }

// export function pwd_check(){
//      /* copy begin */
//     	$("#idcheck").hide();
//     	//아이디 영역을 숨김
//     	$user_id=$.trim($("#user_id").val());
//     	//1.입력글자 길이 체크
//     	if($user_id.length < 4){
//     		$newtext='<font color="red" size="3"><b>아이디는 4자 이상이어야 합니다.</b></font>';
//     		$("#idcheck").text('');
//     		//idcheck 아이디 영역 문자열을 초기화
//     		$("#idcheck").show();
//     		//idcheck 아이디 영역을 보이게 함.
//     		$("#idcheck").append($newtext);
//     		//idcheck영역에 문자열을 추가
//     		$("#user_id").val('').focus();
//     		return false;
//     	};
//     	if($user_id.length > 12){
//     		$newtext='<font color="red" size="3"><b>아이디는12자 이하이어야 합니다.</b></font>';
//     		$("#idcheck").text('');
//     		//idcheck 아이디 영역 문자열을 초기화
//     		$("#idcheck").show();
//     		//idcheck 아이디 영역을 보이게 함.
//     		$("#idcheck").append($newtext);
//     		//idcheck영역에 문자열을 추가
//     		$("#user_id").val('').focus();
//     		return false;
//     	};
//     	//2.입력글자 확인
//     	if(!(validate_userid($user_id))){
//     		$newtext='<font color="red" size="3"><b>아이디는 영문소문자,숫자,_조합만 가능합니다.</b></font>';
//     		$("#idcheck").text('');
//     		$("#idcheck").show();
//     		$("#idcheck").append($newtext);
//     		$("#user_id").val('').focus();
//     		return false;
//  	}

//     export function email_check(){
//          /* copy begin */
//         	$("#idcheck").hide();
//         	//아이디 영역을 숨김
//         	$user_id=$.trim($("#user_id").val());
//         	//1.입력글자 길이 체크
//         	if($user_id.length < 4){
//         		$newtext='<font color="red" size="3"><b>아이디는 4자 이상이어야 합니다.</b></font>';
//         		$("#idcheck").text('');
//         		//idcheck 아이디 영역 문자열을 초기화
//         		$("#idcheck").show();
//         		//idcheck 아이디 영역을 보이게 함.
//         		$("#idcheck").append($newtext);
//         		//idcheck영역에 문자열을 추가
//         		$("#user_id").val('').focus();
//         		return false;
//         	};
//         	if($user_id.length > 12){
//         		$newtext='<font color="red" size="3"><b>아이디는12자 이하이어야 합니다.</b></font>';
//         		$("#idcheck").text('');
//         		//idcheck 아이디 영역 문자열을 초기화
//         		$("#idcheck").show();
//         		//idcheck 아이디 영역을 보이게 함.
//         		$("#idcheck").append($newtext);
//         		//idcheck영역에 문자열을 추가
//         		$("#user_id").val('').focus();
//         		return false;
//         	};
//         	//2.입력글자 확인
//         	if(!(validate_userid($user_id))){
//         		$newtext='<font color="red" size="3"><b>아이디는 영문소문자,숫자,_조합만 가능합니다.</b></font>';
//         		$("#idcheck").text('');
//         		$("#idcheck").show();
//         		$("#idcheck").append($newtext);
//         		$("#user_id").val('').focus();
//         		return false;
//      	}

// //정규표현식
// function validate_userid($user_id)
// {
//    var pattern= new RegExp(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/);
//   return pattern.test($user_id);
// };
// function validate_userpwd($user_pwd)
// {
//   var pattern= new RegExp(/^[a-z0-9_]+$/);
//   return pattern.test($user_pwd);
// };
