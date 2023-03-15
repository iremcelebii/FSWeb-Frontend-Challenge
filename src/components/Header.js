import resimHeader from "../resimler/header-foto.png";
import github from "../resimler/github.png";
import linkedin from "../resimler/LinkedIn.png";
import "./Header.css";
export default function Header() {
  return (
    <div className="text-align-center-max-width-415 ">
      <h1 className="h1 color-yesil">İREM ÇELEBİ</h1>
      <div className="flex gap-5-763vw margin-top-2-44rem flex-direction-column-max-width-415 ">
        <div className="align-self-end">
          <h2 className="h2 color-yesil">I am a Frontend Developer...</h2>
          <p className="p-header color-white margin-top-2-25rem  ">
            ...who likes to craft solid and scalable frontend products with
            great user experiences.
          </p>
          <div className="flex gap-0-75rem  margin-top-2-25rem justify-content-center-max-width-415">
            <a
              target="_blank"
              href="https://github.com/iremcelebii"
              className="flex bg-white buton-radius text-decoration-none"
            >
              <div className="flex gap-0-70rem align-items-center">
                <img className="buton-resim-padding" src={github}></img>
                <p className="buton-yazi color-mor-buton ">Github</p>
              </div>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/irem-%C3%A7elebi-7ba466259/"
              className="flex bg-white buton-radius text-decoration-none"
            >
              <div className="flex gap-0-70rem align-items-center">
                <img className="buton-resim-padding" src={linkedin}></img>
                <p className=" buton-yazi   color-mor-buton">Linkedin</p>
              </div>
            </a>
          </div>
        </div>

        <div className="align-self-end">
          <img className="header-resim " src={resimHeader}></img>
        </div>
      </div>
    </div>
  );
}
