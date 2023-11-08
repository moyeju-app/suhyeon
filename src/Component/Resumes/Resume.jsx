const Resume = () => {
  return (
    <div id = "resume">
	    <table class="a">
		    <tr>
			    <td rowspan="6"> <img src="images/index.jpg" alt = "face" /></td>
			    <td  bgcolor="#e3fcff">성 명</td>
				<td colspan="3">박수현</td>
	  	  </tr>
		    <tr>
  			  <td bgcolor="#e3fcff">생년월일</td>
	  		  <td>1999.11.01</td>
	  		  <td bgcolor="#e3fcff">나이</td>
	  		  <td>25</td>
  		  </tr>
	  	  <tr>
	  		  <td bgcolor="#e3fcff">희망직무</td>
	  		  <td colspan="3">자산운용 / PB</td>
	  	  </tr>
	  	  <tr>
	  		  <td bgcolor="#e3fcff">병역사항</td>
	  		  <td colspan="3">만기전역</td>
	  		  
	  	  </tr>
	  	  <tr>
	  	  	<td bgcolor="#e3fcff">주소</td>
	  	  	<td colspan="3">서울특별시 강동구 ~</td>
	  	  </tr>	
			<tr>
	  	  	<td bgcolor="#e3fcff">연락처</td>
	  	  	<td>010-9979-XXXX</td>	
	  	  	<td bgcolor="#e3fcff">E-mail</td>
	  	  	<td>qwerty@naver.com</td>
	  	  </tr>
	    </table>

    <em>- 학력사항</em>
    <table>
      	<tr>
	  	    <th bgcolor="#e3fcff">구분</th>
	  	    <th bgcolor="#e3fcff">재학기간</th>
	  	    <th bgcolor="#e3fcff">졸업구분</th>
			<th bgcolor="#e3fcff">학교명</th>
			<th bgcolor="#e3fcff">주전공(복수전공)</th>
			<th bgcolor="#e3fcff">학점</th>
      	</tr>
	  	<tr>
	  	  <td>고등학교</td><td>2015~2017</td><td>졸업</td><td>오산고등학교</td><td>-</td><td>-</td>
	  	</tr>
	  	<tr>
	  	  <td>대학교</td><td>2018~</td><td>재학</td><td>가천대학교</td><td>금융수학과(컴퓨터공학과)</td><td>3.93/4.5</td>
	  	</tr>
    </table>
	
	<em>- 경력사항</em>
    <table>
      	<tr>
	  	    <th bgcolor="#e3fcff">근무기간</th>
	  	    <th bgcolor="#e3fcff">근무처</th>
	  	    <th bgcolor="#e3fcff">부서</th>
			<th bgcolor="#e3fcff">직책</th>
			<th bgcolor="#e3fcff">담당업무</th>
      	</tr>
	  	<tr>
	  	  <td>22.12.19~23.06.15</td><td>나이스피앤아이</td><td>(TR사업팀)정보서비스팀</td><td>인턴</td><td>TR위탁보고</td>
	  	</tr>
    </table>

    <em>- 자격증</em>
    <table class="aa">
	  <tr>
        <th bgcolor="#e3fcff">자격증</th>
		<th bgcolor="#e3fcff">취득일</th>
      </tr>
	  <tr>
		<td>자산관리사(FP)</td><td>20.11.20</td>
      </tr>
	  <tr>
		<td>투자자산운용사</td><td>21.02.10</td>
      </tr>
	  <tr>
		<td>AFPK</td><td>21.09.10</td>
      </tr>
	  <tr>
		<td>컴퓨터활용능력 1급</td><td>23.05.19</td>
      </tr>
    </table>
		<br/>
  </div>
  );
};

export default Resume;