import { useState } from "react";
import styles from "./App.module.css";
import Educational from "./components/educationalHIstory/educational";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import PersonalInfo from "./components/personalInfo/personalInfo";
function App() {
  const [personalInfoData, setPersonalInfoData] = useState({
    name: "홍길동",
    birth: "1998-03-18",
    adress: "서울특별시 영등포구",
    email: "jyyun@zentropy.com",
    number: "010-2055-7663",
  });
  return (
    <div className="App">
      <Header />
      <PersonalInfo personalInfoData={personalInfoData} />
      <Educational />
      <Footer />
    </div>
  );
}

export default App;
