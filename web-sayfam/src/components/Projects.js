import "./Projects.css";
import project1 from "../resimler/project1.png";
import project2 from "../resimler/project2.png";

export default function Projects() {
  return (
    <div>
      <h2 className="h2 color-mor">Projects</h2>

      <div className="bg-white margin-top-bottom   flex align-items-center border-radius-shadow">
        <img src={project1}></img>

        <div className="margin-left-3-33-vw margin-right-2-22vw flex flex-direction-column gap-1-5rem">
          <h3 className="h3-project color-mor">Workintech</h3>
          <p className="p-project ">
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="flex gap-0-04166vw">
            <div className="bg-mor  border-radius-1-4375 padding-buton-project ">
              <p className="buton-yazi-project">react</p>
            </div>
            <div className="bg-mor  border-radius-1-4375 padding-buton-project">
              <p className="buton-yazi-project">react</p>
            </div>
            <div className="bg-mor  border-radius-1-4375 padding-buton-project">
              <p className="buton-yazi-project">react</p>
            </div>
          </div>
          <div className="flex gap-1-04166vw">
            <a target="_blank" href="https://github.com/iremcelebii">
              <p className="p-link-project">View Site</p>
            </a>
            <a target="_blank" href="https://github.com/iremcelebii">
              <p className="p-link-project">Github</p>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white  flex align-items-center border-radius-shadow">
        <img src={project1}></img>

        <div className="margin-left-3-33-vw margin-right-2-22vw flex flex-direction-column gap-1-5rem">
          <h3 className="h3-project color-mor">Workintech</h3>
          <p className="p-project ">
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="flex gap-0-04166vw">
            <div className="bg-mor  border-radius-1-4375 padding-buton-project ">
              <p className="buton-yazi-project">react</p>
            </div>
            <div className="bg-mor  border-radius-1-4375 padding-buton-project">
              <p className="buton-yazi-project">react</p>
            </div>
            <div className="bg-mor  border-radius-1-4375 padding-buton-project">
              <p className="buton-yazi-project">react</p>
            </div>
          </div>
          <div className="flex gap-1-04166vw">
            <a target="_blank" href="https://github.com/iremcelebii">
              <p className="p-link-project">View Site</p>
            </a>
            <a target="_blank" href="https://github.com/iremcelebii">
              <p className="p-link-project">Github</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
