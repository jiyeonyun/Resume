import React from "react";

const Footer = (props) => {
  const today = new Date();
  console.log(today);
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  return (
    <table>
      <tr>
        <td colspan="6">
          <p style={{ textAlign: "center" }}>
            위 기재 사항은 사실과 틀림이 없습니다.
          </p>
          <br />
          <br />
          <p style={{ textAlign: "center" }}>
            {year}년 &nbsp; {month}월 &nbsp; {date}일
          </p>
          <br />
          <br />
          <p style={{ textAlign: "right" }}>
            {props.personalInfoData.name} &nbsp;&nbsp;&nbsp;
            (인)&nbsp;&nbsp;&nbsp;
          </p>
        </td>
      </tr>
    </table>
  );
};

export default Footer;

<footer></footer>;
