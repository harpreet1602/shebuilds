import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    setLoggedIn(localStorage.getItem("loggedIn"));
  }, []);

  const router = useRouter();

  return (
    <>
      {console.log(loggedIn)}
      <div className={`${colorChange ? "navbar2" : "navbar"}`}>
        <img
          src="/logo.jpg"
          alt="logo"
          width={100}
          height={100}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <div className="navlink">
          <a href="/about-us" className="nav-links">
            About
          </a>
          <a href="/moodtracker" className="nav-links">
            Self Assement Tool
          </a>
          <a href="/education" className="nav-links">
            Education
          </a>
          <a href="/vent-it-out" className="nav-links">
            Vent It Out
          </a>
          <a
            href="http://healthcollective.in/contact/helplines/"
            className="nav-links"
            target={"_blank"}
          >
            Helpline
          </a>
        </div>
        {loggedIn && (
          <>
            <button
              className="login"
              onClick={() => {
                localStorage.removeItem("loggedIn");
                router.reload();
              }}
            >
              Log Out
            </button>
          </>
        )}
        {!loggedIn && (
          <div className="button">
            <button className="login" onClick={() => router.push("/login")}>
              Log In
            </button>
            <button className="signup" onClick={() => router.push("/signup")}>
              Sign Up
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
