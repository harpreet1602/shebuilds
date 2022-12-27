const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src="/logo-black.jpg" alt="logo" width={200} height={200} />
        <div className="footlink">
          <div className="footer-links">
            <a href="#" className="foot-links">
              EDUCATION
            </a>
            <a href="#" className="foot-links">
              MOOD TRACKER
            </a>
            <a href="#" className="foot-links">
              VENT IT OUT
            </a>
          </div>
          <div className="footer-links">
            <a href="#" className="foot-links">
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
