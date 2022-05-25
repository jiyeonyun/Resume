import React from "react";

const PersonalInfo = ({ personalInfoData }) => {
  return (
    <table>
      <tr>
        <td rowSpan="5" width="85" height="80">
          <img src="" alt="" />
        </td>
        <th colSpan="9" height="30">
          <font size="5">이 력 서</font>
        </th>
      </tr>
      <tr>
        <th rowSpan="3" width="85" height="50" bgcolor="D5D5D5">
          성 명
        </th>
      </tr>
      <tr>
        <th colSpan="2" bgcolor="D5D5D5">
          한 글
        </th>
        <td width="90">{personalInfoData.name}</td>
        <th bgcolor="D5D5D5">생 년 월 일</th>
        <th colSpan="2" width="80" bgcolor="D5D5D5">
          E-mail
        </th>
      </tr>
      <tr>
        <th colSpan="2" bgcolor="D5D5D5">
          한 문
        </th>
        <td>{personalInfoData.nameh}</td>
        <td>{personalInfoData.birth}</td>
        <td colSpan="2">{personalInfoData.email}</td>
      </tr>
      <tr>
        <th colSpan="2" width="50" bgcolor="D5D5D5">
          연 락 처
        </th>
        <td colSpan="2">{personalInfoData.number}</td>
        <th colSpan="2" width="50" bgcolor="D5D5D5">
          나이
        </th>
        <td colSpan="2">만 {personalInfoData.age} 세</td>
      </tr>
      <tr>
        <th bgcolor="D5D5D5">주 소</th>
        <td colSpan="8">{personalInfoData.adress}</td>
      </tr>
    </table>
  );
};

export default PersonalInfo;
