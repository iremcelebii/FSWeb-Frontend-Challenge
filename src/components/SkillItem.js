import "./SkillItem.css";
import { skillsData1, skillsData2, skillsData3 } from "../skillsData";

import { Link } from "react-router-dom";
export default function SkillItem(props) {
  const { data } = props;
  const filtelenmis = skillsData3.filter((skill) => skill.id == data);
  console.log(filtelenmis);
  return (
    <div className="skills-profile-padding-top-bottom component-padding-right-left">
      <div className="flex justify-content-space-between flex-direction-column-max-width-1060px gap-2rem-max-width-1060">
        <Link to={`/`} className="text-decoration-none">
          <h2 className="h2 color-mor">Skills</h2>
        </Link>
        <div className="flex flex-direction-column  gap-2-1875-rem flex-direction-row-max-width-1060px justify-content-space-between-max-width-1060">
          {skillsData1.map((skill) => (
            <div
              key={skill.id}
              className="flex align-items-center gap-1-66vw width-21-84vw flex-direction-column-max-width-890px"
            >
              <img
                src={skill.image}
                alt={skill.isim}
                className={
                  skill.id == data
                    ? "logo width-8-33vw"
                    : "logo width-8-33vw visibility-hidden"
                }
              ></img>
              <p
                className={
                  skill.id == data ? "logo-yazi" : "logo-yazi visibility-hidden"
                }
              >
                {skill.isim}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-direction-column  gap-2-1875-rem  flex-direction-row-max-width-1060px justify-content-space-between-max-width-1060">
          {skillsData2.map((skill) => (
            <div
              key={skill.id}
              className="flex align-items-center gap-1-66vw width-21-84vw flex-direction-column-max-width-890px"
            >
              <img
                src={skill.image}
                alt={skill.isim}
                className={
                  skill.id == data
                    ? "logo width-8-33vw"
                    : "logo width-8-33vw visibility-hidden"
                }
              ></img>
              <p
                className={
                  skill.id == data ? "logo-yazi" : "logo-yazi visibility-hidden"
                }
              >
                {skill.isim}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="ek-yazi margin-top-1-rem">{filtelenmis[0].aciklama}</div>
    </div>
  );
}
