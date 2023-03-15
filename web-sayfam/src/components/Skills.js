import js from "../resimler/js-logo.png";
import react from "../resimler/react-logo.png";
import redux from "../resimler/redux-logo.png";
import node from "../resimler/node-logo.png";
import vscode from "../resimler/vscode-logo.png";
import figma from "../resimler/figma-logo.png";
import "./Skills.css";
export default function Skills() {
  return (
    <div className="flex justify-content-space-between flex-direction-column-max-width-1060px gap-2rem-max-width-1060">
      <h2 className="h2 color-mor">Skills</h2>

      <div className="flex flex-direction-column  gap-2-1875-rem flex-direction-row-max-width-1060px justify-content-space-between-max-width-1060">
        <div className="flex align-items-center gap-1-66vw width-21-84vw flex-direction-column-max-width-890px">
          <img src={js} alt="js" className="logo width-8-33vw "></img>
          <p className="logo-yazi">JAVASCRIPT</p>
        </div>
        <div className="flex align-items-center gap-1-66vw width-21-84vw flex-direction-column-max-width-890px">
          <img src={react} alt="react" className="logo width-8-33vw "></img>
          <p className="logo-yazi">REACT</p>
        </div>
        <div className="flex align-items-center gap-1-66vw width-21-84vw flex-direction-column-max-width-890px">
          <img src={redux} alt="redux" className="logo width-8-33vw "></img>
          <p className="logo-yazi">REDUX</p>
        </div>
      </div>
      <div className="flex flex-direction-column  gap-2-1875-rem  flex-direction-row-max-width-1060px justify-content-space-between-max-width-1060">
        <div className="flex align-items-center gap-1-66vw width-21-84vw flex-direction-column-max-width-890px">
          <img src={node} alt="node" className="logo width-8-33vw "></img>
          <p className="logo-yazi">NODE</p>
        </div>

        <div className="flex align-items-center gap-1-66vw width-21-84vw flex-direction-column-max-width-890px">
          <img src={vscode} alt="vscode" className="logo width-8-33vw "></img>
          <p className="logo-yazi">VS CODE</p>
        </div>

        <div className="flex align-items-center gap-1-66vw width-21-84vw flex-direction-column-max-width-890px ">
          <img src={figma} alt="figma" className="logo width-8-33vw "></img>
          <p className="logo-yazi">FIGMA</p>
        </div>
      </div>
    </div>
  );
}
