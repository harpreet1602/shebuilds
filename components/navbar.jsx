import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <>
      <div className={`${colorChange ? "navbar2" : "navbar"}`}>
        <img src="/logo.jpg" alt="logo" width={100} height={100} />
        <div className="navlink">
          <a href="#" className="nav-links">
            About
          </a>
          <a href="/moodtracker" className="nav-links">
            Mood Tracker
          </a>
          <a href="#" className="nav-links">
            Education
          </a>
          <a href="#" className="nav-links">
            Vent It Out
          </a>
        </div>
        <div className="button">
          <button className="login">Log In</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
