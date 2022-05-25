import { useState } from "react";
import styles from "./App.module.css";
import Educational from "./components/educationalHIstory/educational";
import Footer from "./components/footer/footer";
import PersonalInfo from "./components/personalInfo/personalInfo";
function App() {
  const [personalInfoData, setPersonalInfoData] = useState({
    name: "홍길동",
    nameh: "洪吉同",
    birth: "1998-03-18",
    adress: "서울특별시 영등포구 당산로 3213 2020호",
    email: "jyyun@zentropy.com",
    number: "010-2055-7663",
    age: 24,
  });
  return (
    <div className="App">
      <PersonalInfo personalInfoData={personalInfoData} />
    </div>
  );
}

export default App;
