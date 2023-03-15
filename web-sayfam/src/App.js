// import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <div className="bg-ikili bg-mor-max-width-415 ">
        <div className="header-padding-top-bottom component-padding-right-left">
          <Header />
        </div>
      </div>
      <div>
        <div className="skills-profile-padding-top-bottom component-padding-right-left">
          <Skills />
        </div>
      </div>

      <div className="bg-mor">
        <div className=" skills-profile-padding-top-bottom component-padding-right-left">
          <Profile />
        </div>
      </div>
      <div className="bg-yesil">
        <div className="component-padding-right-left project-padding-top-bottom">
          <Projects />
        </div>
      </div>
      <div>
        <div className="component-footer-padding-right-left footer-padding-top-bottom">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
