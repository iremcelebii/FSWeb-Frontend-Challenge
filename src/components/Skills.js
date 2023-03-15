import { Link } from "react-router-dom";

import { skillsData1 } from "../skillsData";
import { skillsData2 } from "../skillsData";
import "./Skills.css";
export default function Skills() {
  return (
    <div className="skills-profile-padding-top-bottom component-padding-right-left">
      <div className="flex justify-content-space-between flex-direction-column-max-width-1060px gap-2rem-max-width-1060">
        <h2 className="h2 color-mor">Skills</h2>

        <div className="flex flex-direction-column  gap-2-1875-rem flex-direction-row-max-width-1060px justify-content-space-between-max-width-1060">
          {skillsData1.map((skill) => (
            <div className="flex align-items-center gap-1-66vw width-21-84vw flex-direction-column-max-width-890px">
              <Link to={`/${skill.isim}`}>
                <img
                  src={skill.image}
                  alt={skill.isim}
                  className="logo width-8-33vw "
                ></img>
                <p className="logo-yazi">{skill.isim}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-direction-column  gap-2-1875-rem  flex-direction-row-max-width-1060px justify-content-space-between-max-width-1060">
          {skillsData2.map((skill) => (
            <div className="flex align-items-center gap-1-66vw width-21-84vw flex-direction-column-max-width-890px">
              <Link to={`/movies/${skill.isim}`}>
                <img
                  src={skill.image}
                  alt={skill.isim}
                  className="logo width-8-33vw "
                ></img>
                <p className="logo-yazi">{skill.isim}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
