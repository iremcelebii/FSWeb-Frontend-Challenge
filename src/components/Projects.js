import "./Projects.css";
import { projects } from "../data";

export default function Projects() {
  return (
    <div>
      <h2 className="h2 color-mor">Projects</h2>

      {projects.map((project) => (
        <div className="bg-white margin-top-bottom width-66-67vw   flex align-items-center border-radius-shadow flex-direction-column-max-width-960px">
          <img
            className="border-radius-0-75rem width-32vw-max-width-960px"
            src={project.image}
          />

          <div className="margin-left-3-33-vw margin-right-2-22vw flex flex-direction-column gap-1-5rem ">
            <h3 className="h3-project color-mor margin-top-max-width-960px">
              {project.isim}
            </h3>
            <p className="p-project ">{project.aciklama}</p>

            <div className="flex gap-0-04166vw justify-content-center-max-width-960px">
              {project.kullanilanlar.map((kullanilan) => (
                <div className="bg-mor  border-radius-1-4375 padding-buton-project ">
                  <p className="buton-yazi-project">{kullanilan}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-1-04166vw justify-content-center-max-width-960px ">
              <a target="_blank" href={project.link1}>
                <p className="p-link-project">View Site</p>
              </a>
              <a target="_blank" href={project.link2}>
                <p className="p-link-project">Github</p>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
