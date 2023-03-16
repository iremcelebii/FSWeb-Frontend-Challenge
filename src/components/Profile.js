import profile from "../resimler/profile-foto.JPG";
import "./Profile.css";

export default function Profile() {
  return (
    <div>
      <h2 className="h2 color-yesil">Profile</h2>

      <div className="flex gap-1-94-vw margin-top-2-0625-rem align-items-center flex-direction-column-max-width-1032px ">
        <div className="flex gap-1-94-vw gap-8-max-width-1032px  align-items-center flex-direction-column-max-width-816px">
          <div className="basic-information-width  width-auto-max-width-816px">
            <h3 className="h3-info margin-basic-info text-align-center-max-width-816px ">
              Basic Information
            </h3>

            <table className="p-profile-info ">
              <tr>
                <th className="text-align-initial padding-bottom-basic-info">
                  Birth Date
                </th>
                <th className="color-white text-align-initial padding-left-basic-info padding-bottom-basic-info">
                  25/04/1997
                </th>
              </tr>
              <tr>
                <th className="text-align-initial adding-bottom-basic-info">
                  City of Residence
                </th>
                <th className="color-white text-align-initial padding-left-basic-info padding-bottom-basic-info">
                  Istanbul
                </th>
              </tr>
              <tr>
                <th className="text-align-initial padding-bottom-basic-info padding-bottom-basic-info">
                  Education
                </th>
                <th className="color-white text-align-initial padding-left-basic-info padding-bottom-basic-info ">
                  ITU - Engineering Management, 2023 (Master’s Degree)
                </th>
              </tr>
              <tr>
                <th className="text-align-initial">Preferred Role</th>
                <th className="color-white text-align-initial padding-left-basic-info">
                  Frontend, UI
                </th>
              </tr>
            </table>
          </div>
          <div>
            <img
              src={profile}
              alt="profile"
              className="profile-foto-width profile-foto "
            ></img>
          </div>
        </div>

        <div className="">
          <h3 className="h3-about margin-bottom-about-me text-align-center-max-width-816px  ">
            About Me
          </h3>
          <p className="p-profile-about  text-align-center-max-width-816px">
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
