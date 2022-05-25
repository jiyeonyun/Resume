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
            <span>성명</span>
            <span>{personalInfoData.name}</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>생년월일</span>
            <span>{personalInfoData.birth}</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>주소</span>
            <span>{personalInfoData.adress}</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>이메일</span>
            <span>{personalInfoData.email}</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>전화번호</span>
            <span>{personalInfoData.number}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PersonalInfo;
