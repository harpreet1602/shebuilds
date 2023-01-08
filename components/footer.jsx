import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <div className="footer">
        <img
          src="/logo-black.jpg"
          alt="logo"
          width={200}
          height={200}
          onClick={() => router.push("/")}
        />
        <div className="footlink">
          <div className="footer-links">
            <a href="/education" className="foot-links">
              EDUCATION
            </a>
            <a href="/moodtracker" className="foot-links">
              Self Assement Tool
            </a>
            <a href="/vent-it-out" className="foot-links">
              VENT IT OUT
            </a>
          </div>
          <div className="footer-links">
            <a href="/about-us" className="foot-links">
              ABOUT
            </a>
            <a href="#" className="foot-links">
              PRIVACY POLICY
            </a>
            <a href="#" className="foot-links">
              NEED TO TALK?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
