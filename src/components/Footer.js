import twitter from "../resimler/twitter-logo.png";
import instagram from "../resimler/instagram-logo.png";
import codepen from "../resimler/codepen-logo.png";
import gmail from "../resimler/gmail-logo.png";

import "./Footer.css";
export default function Footer() {
  return (
    <div className="flex flex-direction-column align-items-center gap-1-5rem">
      <div></div>
      <h2 className="h2-footer color-mor text-align-center">
        Send me a message!
      </h2>
      <p className="p-footer">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>
      <p className="p-mail-footer">iremcelebi2404@gmail.com</p>
      <div className="flex gap-2-014rem">
        <img src={twitter} alt="twitter"></img>
        <img src={codepen} alt="codepen"></img>
        <img src={gmail} alt="gmail"></img>
        <img src={instagram} alt="instagram"></img>
      </div>
    </div>
  );
}
