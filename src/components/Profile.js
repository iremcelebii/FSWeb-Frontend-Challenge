import profile from "../resimler/profile-foto.JPG";
import "./Profile.css";

export default function Profile() {
  return (
    <div>
      <h2 className="h2 color-yesil">Profile</h2>
      <div className="flex gap-1-94-vw margin-top-2-0625-rem align-items-center flex-direction-column-max-width-1032px ">
        <div className="flex gap-1-94-vw align-items-center flex-direction-column-max-width-816px">
          <div className="basic-information-width flex flex-direction-column gap-1-2824rem  width-auto-max-width-816px">
            <h3 className="h3-info text-align-center-max-width-816px  ">
              Basic Information
            </h3>
            <div className="p-profile-info flex gap-0-695 justify-content-center-max-width-816px ">
              <p className="width-7-01-vw ">Birth Date</p>
              <p className="color-white width-42-63vw-max-width-816px ">
                25/04/1997
              </p>
            </div>
            <div className="p-profile-info flex gap-0-695 justify-content-center-max-width-816px">
              <p className="width-7-01-vw">City of Residence</p>
              <p className="color-white width-42-63vw-max-width-816px ">
                Istanbul
              </p>
            </div>

            <div className="p-profile-info flex gap-0-695 justify-content-center-max-width-816px">
              <p className="width-7-01-vw">Education</p>
              <p className="color-white width-9-7-vw width-42-63vw-max-width-816px ">
                ITU - Engineering Management, 2023
                <br />
                (Master’s Degree)
              </p>
            </div>
            <div className="p-profile-info flex gap-0-695 justify-content-center-max-width-816px">
              <p className="width-7-01-vw">Preferred Role</p>
              <p className="color-white width-42-63vw-max-width-816px ">
                Frontend, UI
              </p>
            </div>
          </div>
          <div>
            <img
              src={profile}
              alt="profile"
              className="profile-foto-width profile-foto "
            ></img>
          </div>
        </div>

        <div className="flex flex-direction-column gap-1-8171rem about-me-width">
          <h3 className="h3-about text-align-center-max-width-816px ">
            About Me
          </h3>
          <p className="p-profile-about width-24-86-vw text-align-center-max-width-816px">
            I have started my academic career with Industrial Engineering. I am
            doing a master's degree in Engineering Management to specialize in
            management. <br />
            <br />I have a goal of starting my business life as a software
            developer and managing software teams in the medium term.
          </p>
        </div>
      </div>
    </div>
  );
}
