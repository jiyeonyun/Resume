import React from "react";

const PersonalInfo = ({ personalInfoData }) => {
  return (
    <table border="1">
      <caption>이력서</caption>
      <tr>
        <td rowspan="3">사진</td>
        <td rowspan="2">성명</td>
        <td rowspan="2">홍길동</td>
        <td colspan="2">주민번호</td>
      </tr>
      <tr>
        <td colspan="4">000000-0000000</td>
      </tr>
      <tr>
        <td colspan="4">생년 월일 2000년 01월 01일</td>
      </tr>
      <tr>
        <td>주소</td>
        <td colspan="4">서울시 강남구 역삼동</td>
      </tr>
      <tr>
        <td rowspan="2">연락처</td>
        <td>집</td>
        <td>02-111-1111</td>
        <td rowspan="2">이메일</td>
        <td rowspan="2">hong@gmail.com</td>
      </tr>
      <tr>
        <td>핸드폰</td>
        <td>010-0000-0000</td>
      </tr>
    </table>
  );
};

export default PersonalInfo;
