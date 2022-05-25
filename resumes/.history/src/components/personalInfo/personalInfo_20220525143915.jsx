import React from "react";

const PersonalInfo = ({ personalInfoData }) => {
  return (
    <section>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <dl>
          <dt>성명</dt>
          <dd>{personalInfoData.name}</dd>
        </dl>
        <dl>
          <dt>생년월일</dt>
          <dd>{personalInfoData.birth}</dd>
        </dl>
        <dl>
          <dt>주소</dt>
          <dd>{personalInfoData.adress}</dd>
        </dl>
        <dl>
          <dt>이메일</dt>
          <dd>{personalInfoData.email}</dd>
        </dl>
        <dl>
          <dt>전화번호</dt>
          <dd>{personalInfoData.number}</dd>
        </dl>
      </div>
    </section>
  );
};

export default PersonalInfo;
