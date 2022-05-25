import React from "react";

const PersonalInfo = ({ personalInfoData }) => {
  return <table>
        <tr>
        <th rowspan="3" width = "85" height = "70" bgcolor="D5D5D5"> 성명</th>
    </tr>
    <tr>
        <th colspan = "2" bgcolor="D5D5D5">한글</th>
        <td width="90"></td>
        <th bgcolor="D5D5D5">생 년 월 일</th>
        <th colspan="2" width = "80" bgcolor="D5D5D5">E-mail</th>
    </tr>

    <tr>
        <th colspan = "2" bgcolor="D5D5D5"> 한문</th>
        <td></td>
        <td></td>
        <td colspan="2"></td>
    </tr>
    <tr>
        <th colspan="2" width="50" bgcolor="D5D5D5">연락처</th>
        <td colspan="2"></td>
        <th colspan="2" width = "50" bgcolor="D5D5D5">긴급 연락처(핸드폰)</th>
        <td colspan="2"></td>
    </tr>
    <tr>
        <th bgcolor="D5D5D5">현주소</th>
        <td colspan="8"></td>
    </tr>
    </table>
  </table>;
};

export default PersonalInfo;
