import React from "react";

const PersonalInfo = ({ personalInfoData }) => {
  return (
    <section>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <ul>
          <li>
            <dt>성명</dt>
            <dd>{personalInfoData.name}</dd>
          </li>
        </ul>
        <ul>
          <li>
            <dt>생년월일</dt>
            <dd>{personalInfoData.birth}</dd>
          </li>
        </ul>
        <ul>
          <li>
            <dt>주소</dt>
            <dd>{personalInfoData.adress}</dd>
          </li>
        </ul>
        <ul>
          <li>
            <dt>이메일</dt>
            <dd>{personalInfoData.email}</dd>
          </li>
        </ul>
        <ul>
          <dt>전화번호</dt>
          <dd>{personalInfoData.number}</dd>
        </ul>
      </div>
    </section>
  );
};

export default PersonalInfo;
