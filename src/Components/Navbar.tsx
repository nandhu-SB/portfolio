import profilePic from "../assets/profilePic.jpg";
import "./Navbar.css";
import headerimg from "../assets/headerimg.png";

function Navbar() {
  return (
    <div className="navbar-container">
      <img src={headerimg} id="header-img" alt="header image" />

      <img src={profilePic} id="profile-pic" alt="profile-pic" />
    </div>
  );
}
export default Navbar;
