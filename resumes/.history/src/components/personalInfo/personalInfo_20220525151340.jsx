import React from "react";

const PersonalInfo = ({ personalInfoData }) => {
  return (
    <tbody>
      <tr>
        <td rowSpan="5" width="85" height="113">
          <img src="" alt="" />
        </td>
        <th colSpan="9" height="50">
          이력서
        </th>
      </tr>
      <tr>
        <th rowSpan="3" width="85" height="70">
          성명
        </th>
      </tr>
      <tr>
        <t colspan="2">한글</t>
        <td width="90"></td>
        <th>생년월일</th>
        <th colSpan="2" width="80">
          E-mail
        </th>
      </tr>
    </tbody>
  );
};

export default PersonalInfo;
