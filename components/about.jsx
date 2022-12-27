const About = () => {
  return (
    <>
      <div className="about">
        <h1 className="about-title">What is Talking Minds?</h1>
        <p className="about-para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          doloribus soluta molestias sit dolor perspiciatis asperiores obcaecati
          necessitatibus maiores tempora!
        </p>
        <div className="about-container">
          <div className="about-box">
            <img
              src="/mood-track.png"
              alt="mood-track"
              width="60px"
              height="60px"
            />
            <h2>Mood Tracker</h2>
          </div>
          <div className="about-box">
            <img
              src="/education.png"
              alt="mood-track"
              width="60px"
              height="60px"
            />
            <h2>Education</h2>
          </div>
          <div className="about-box">
            <img
              src="/relax.png"
              alt="mood-track"
              width="60px"
              height="60px"
            />
            <h2>Vent It Out</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
