import styles from "./App.module.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import PersonalInfo from "./components/personalInfo/personalInfo";
function App() {
  return (
    <div className="App">
      <Header />
      <table>
        <PersonalInfo />
        <Footer />
      </table>
    </div>
  );
}

export default App;
