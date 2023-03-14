import profile from "../resimler/profile-foto.JPG";
import "./Profile.css";

export default function Profile() {
  return (
    <div>
      <h2 className="h2 color-yesil">Profile</h2>
      <div className="flex justify-content-space-between margin-top-2-0625-rem">
        <div className="profile-context-width flex flex-direction-column justify-content-space-between">
          <h3 className="h3-info">Basic Information</h3>
          <div className="p-profile-info flex gap-0-695 ">
            <p className="width-7-01-vw">Birth Date</p>
            <p className="color-white">25/04/1997 </p>
          </div>
          <div className="p-profile-info flex gap-0-695">
            <p className="width-7-01-vw">City of Residence</p>
            <p className="color-white">Istanbul </p>
          </div>

          <div className="p-profile-info flex gap-0-695">
            <p className="width-7-01-vw">Education</p>
            <p className="color-white">
              ITU - Engineering <br />
              Management, 2023
              <br />
              (Master’s Degree)
            </p>
          </div>
          <div className="p-profile-info flex gap-0-695">
            <p className="width-7-01-vw">Preferred Role</p>
            <p className="color-white ">Frontend, UI</p>
          </div>
        </div>
        <div>
          <img
            src={profile}
            alt="profile"
            className="profile-context-width profile-foto"
          ></img>
        </div>
        <div className="profile-context-width flex flex-direction-column justify-content-space-between">
          <h3 className="h3-about">About Me</h3>
          <p className="p-profile-about">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia. <br />
            <br />
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </div>
    </div>
  );
}
