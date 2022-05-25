import React from "react";

const PersonalInfo = ({ personalInfoData }) => {
  return (
    <table border="1" width="500">
      <tr>
        <td rowspan="5" width="65" height="93">
          <img src="" alt="" />
        </td>
        <th colspan="9" height="50">
          <font size="5">이 력 서</font>
        </th>
      </tr>
      <tr>
        <th rowspan="3" width="85" height="70" bgcolor="D5D5D5">
          성 명
        </th>
      </tr>
      <tr>
        <th colspan="2" bgcolor="D5D5D5">
          한 글
        </th>
        <td width="90"></td>
        <th bgcolor="D5D5D5">생 년 월 일</th>
        <th colspan="2" width="80" bgcolor="D5D5D5">
          E-mail
        </th>
      </tr>
      <tr>
        <th colspan="2" bgcolor="D5D5D5">
          {" "}
          한 문
        </th>
        <td></td>
        <td></td>
        <td colspan="2"></td>
      </tr>
      <tr>
        <th colspan="2" width="50" bgcolor="D5D5D5">
          연 락 처
        </th>
        <td colspan="2"></td>
        <th colspan="2" width="50" bgcolor="D5D5D5">
          긴급 연락처(핸드폰)
        </th>
        <td colspan="2"></td>
      </tr>
      <tr>
        <th bgcolor="D5D5D5">현 주 소</th>
        <td colspan="8"></td>
      </tr>
    </table>
  );
};

export default PersonalInfo;
