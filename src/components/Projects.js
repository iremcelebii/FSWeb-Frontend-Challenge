import "./Projects.css";
import project1 from "../resimler/project1.png";
import project2 from "../resimler/project2.png";

export default function Projects() {
  return (
    <div>
      <h2 className="h2 color-mor">Projects</h2>

      <div className="bg-white margin-top-bottom width-66-67vw   flex align-items-center border-radius-shadow flex-direction-column-max-width-960px">
        <img
          className="border-radius-0-75rem width-32vw-max-width-960px"
          src={project1}
        />

        <div className="margin-left-3-33-vw margin-right-2-22vw flex flex-direction-column gap-1-5rem ">
          <h3 className="h3-project color-mor margin-top-max-width-960px">
            Technological Dishes
          </h3>
          <p className="p-project ">
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="flex gap-0-04166vw justify-content-center-max-width-960px">
            <div className="bg-mor  border-radius-1-4375 padding-buton-project ">
              <p className="buton-yazi-project">react</p>
            </div>
            <div className="bg-mor  border-radius-1-4375 padding-buton-project">
              <p className="buton-yazi-project">cyress</p>
            </div>
            <div className="bg-mor  border-radius-1-4375 padding-buton-project">
              <p className="buton-yazi-project">react hook form</p>
            </div>
          </div>
          <div className="flex gap-1-04166vw justify-content-center-max-width-960px ">
            <a target="_blank" href="https://teknojikyemekler.vercel.app/">
              <p className="p-link-project">View Site</p>
            </a>
            <a
              target="_blank"
              href="https://github.com/iremcelebii/FSWeb-S7-Challenge"
            >
              <p className="p-link-project">Github</p>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white  flex align-items-center border-radius-shadow flex-direction-column-max-width-960px">
        <img
          className="border-radius-0-75rem width-32vw-max-width-960px"
          src={project2}
        ></img>

        <div className="margin-left-3-33-vw margin-right-2-22vw flex flex-direction-column gap-1-5rem">
          <h3 className="h3-project color-mor margin-top-max-width-960px">
            Watch List
          </h3>
          <p className="p-project ">
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="flex gap-0-04166vw justify-content-center-max-width-960px">
            <div className="bg-mor  border-radius-1-4375 padding-buton-project ">
              <p className="buton-yazi-project">react</p>
            </div>
            <div className="bg-mor  border-radius-1-4375 padding-buton-project">
              <p className="buton-yazi-project">redux</p>
            </div>
            <div className="bg-mor  border-radius-1-4375 padding-buton-project">
              <p className="buton-yazi-project">redux-logger</p>
            </div>
          </div>
          <div className="flex gap-1-04166vw justify-content-center-max-width-960px">
            <a target="_blank" href="https://watchlist-ashy.vercel.app/">
              <p className="p-link-project">View Site</p>
            </a>
            <a
              target="_blank"
              href="https://github.com/iremcelebii/fsweb-s10g3-redux-watchlist"
            >
              <p className="p-link-project">Github</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
