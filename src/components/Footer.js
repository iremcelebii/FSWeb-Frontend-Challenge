import twitter from "../resimler/twitter-logo.png";
import instagram from "../resimler/instagram-logo.png";
import codepen from "../resimler/codepen-logo.png";
import gmail from "../resimler/gmail-logo.png";

import "./Footer.css";
export default function Footer() {
  return (
    <footer className="flex flex-direction-column align-items-center gap-1-5rem">
      <div></div>
      <h2 className="h2-footer color-mor text-align-center">
        Send me a message!
      </h2>
      <p className="p-footer">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>
      <a target="_blank" href="mailto:iremcelebi2404@gmail.com">
        <p className="p-mail-footer">iremcelebi2404@gmail.com</p>
      </a>

      <div className="flex gap-2-014rem">
        <a target="_blank" href="https://mobile.twitter.com/irreversibleirm">
          <img src={twitter} alt="twitter"></img>
        </a>

        <img src={codepen} alt="codepen"></img>

        <a target="_blank" href="mailto:iremcelebi2404@gmail.com">
          <img src={gmail} alt="gmail"></img>
        </a>
        <a target="_blank" href="https://www.instagram.com/iiremcelebii/">
          <img src={instagram} alt="instagram"></img>
        </a>
      </div>
    </footer>
  );
}
