import React from "react";
import edudata from "../../data/edudata";
const Educational = (props) => {
  console.log(edudata);
  return (
    <table>
      <tr>
        <th colSpan="4" width="790" bgcolor="D5D5D5">
          학 력 사 항
        </th>
      </tr>
      <tr>
        <th bgcolor="D5D5D5">기 간</th>
        <th bgcolor="D5D5D5">학 교 명</th>
        <th bgcolor="D5D5D5">학점</th>
        <th bgcolor="D5D5D5">졸업</th>
      </tr>
      {edudata.map((data, i) => {
        return (
          <tr key={i}>
            <td>{data.date}</td>
            <td align="center">{data.content}</td>
            <td>{data.grade}</td>
            <td>{data.gradu ? "졸업" : "재학중"}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Educational;
