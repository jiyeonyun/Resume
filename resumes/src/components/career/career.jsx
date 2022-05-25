import React from "react";
import { career, certificate } from "../../data/careerData";
const Career = (props) => {
  return (
    <table>
      <tr>
        <th colspan="6" bgcolor="D5D5D5">
          전 공 경 력 사 항
        </th>
      </tr>
      <tr>
        <th bgcolor="D5D5D5">근무년월</th>
        <th bgcolor="D5D5D5">기 간</th>
        <th bgcolor="D5D5D5">근 무 처</th>
        <th bgcolor="D5D5D5">직위</th>
      </tr>
      {career.map((data, i) => {
        return (
          <tr key={i}>
            <td align="center">{data.worgingDays}</td>
            <td align="center">{data.term}</td>
            <td>{data.company}</td>
            <td colspan="2">{data.position}</td>
          </tr>
        );
      })}
      <tr>
        <th colspan="6" bgcolor="D5D5D5">
          자 격 증
        </th>
      </tr>
      <tr>
        <th colspan="2" bgcolor="D5D5D5">
          자격증명
        </th>
        <th colspan="3" bgcolor="D5D5D5">
          취득년도
        </th>
      </tr>
      {certificate.map((data, i) => {
        return (
          <tr key={i}>
            <td colspan="2">{data.name}</td>
            <td colspan="3">{data.year}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Career;
