import React from "react";
import edudata from "../../data/edudata";
const Educational = (props) => {
  console.log(edudata);
  return (
    <section>
      <h4>학력</h4>
      <ul>
        {edudata.map((data, i) => {
          console.log(data.grade);
        })}
      </ul>
    </section>
  );
};

export default Educational;
