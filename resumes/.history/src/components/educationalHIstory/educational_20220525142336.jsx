import React from "react";
import edudata from "../../data/edudata";
const Educational = (props) => {
  console.log(edudata);
  return (
    <thead>
      <tr>
        <th>기간</th>
        <th>학교명</th>
        <th>학점</th>
        <th>졸업여부</th>
      </tr>
    </thead>
  );
};

export default Educational;
