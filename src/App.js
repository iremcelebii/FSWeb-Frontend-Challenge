import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SkillItem from "./components/SkillItem";
function App() {
  return (
    <div>
      <div className="bg-ikili bg-mor-max-width-415 ">
        <div className="header-padding-top-bottom component-padding-right-left">
          <Header />
        </div>
      </div>
      <main>
        <Switch>
          <Route exact path="/">
            <Skills />
          </Route>
          <Route path="/:isim">
            <SkillItem />
          </Route>
        </Switch>

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
      </main>
      <div>
        <div className="component-footer-padding-right-left footer-padding-top-bottom">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
