import React, {useState, useEffect} from 'react'
import axios from '../axios/axios'
import './UserInfo.css'


function UserInfo({ user_id,name, email, address,phone}) {


    return(
        <div className="userInfo">
   			<table class="table">
				<tr>
					<td>
						<form name="regForm" method="post" action="#">
							<table>
								<tr >
									<td colspan="2"><b>회원 정보 수정</b></td>
								</tr>
								<tr>
									<td>아이디</td>
									<td>
									{user_id}
									</td>
								</tr>
								<tr>
									<td>패스워드 변경</td>
									<td><input type="password" name="pass" size="15" value="" placeholder=""/></td>
								</tr>
								<tr>
									<td>패스워드 확인</td>
									<td><input type="password" name="repass" size="15" placeholder=""/></td>
								</tr>
								<tr>
									<td>이름</td>
									<td>{name}</td>
								</tr>
								<tr>
									<td>이메일</td>
									<td><input type="text" name="mail" size="27"  placeholder={email}/></td>
								</tr>
								<tr>
									<td>전화번호</td>
									<td><input type="text" name="phone" size="20"  placeholder={phone}/></td>
								</tr>
								<tr>
									<td>우편번호</td>
									<td>
										<input type="text" name="zipcode" size="7" value="" placeholder=""/> 
										<input type="button" value="우편번호찾기" id="btnZip"/>
									</td>
								</tr>
								<tr>
									<td>주소</td>
									<td><input type="text" name="address" size="60"  placeholder={address}/></td>
								</tr>
								<tr>
									<td colspan="2" >
										<input type="button" value="수정완료" id="btnModify"/>			
										<input type="button" value="수정취소" id="btnModifyCancel" />
										<input type="button" value="회원탈퇴" id="btnDelete"/>
									</td>
								</tr>
							</table>
						</form>
					</td>
				</tr>
			</table>
		</div>    
    )

}

export default UserInfo;