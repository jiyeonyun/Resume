import styles from "./App.module.css";
import Educational from "./components/educationalHIstory/educational";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import PersonalInfo from "./components/personalInfo/personalInfo";
function App() {
  return (
    <div className="App">
      <Header />
      <PersonalInfo />
      <Educational />
      <Footer />
    </div>
  );
}

export default App;
