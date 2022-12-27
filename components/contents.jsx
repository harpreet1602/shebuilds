const Content = () => {
  return (
    <>
      <div className="content">
        <div className="content-box mood">
          <img src="/mood.jpg" alt="mood" width={500} height={500} />
          <div>
            <h1>Mood Tracker</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              suscipit tenetur ipsam animi, eveniet perspiciatis vero officia
              qui id, debitis vel expedita natus deleniti voluptates quis eius.
              Quasi, optio laboriosam.
            </p>
            <a href="/moodtracker">Try Now!</a>
          </div>
        </div>
        <div className="content-box mental-education">
          <img
            src="/mental-education.jpeg"
            alt="mental-education"
            width={500}
            height={500}
          />
          <div>
            <h1>Education</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              suscipit tenetur ipsam animi, eveniet perspiciatis vero officia
              qui id, debitis vel expedita natus deleniti voluptates quis eius.
              Quasi, optio laboriosam.
            </p>
            <a href="/moodtracker">Learn More</a>
          </div>
        </div>
        <div className="content-box vent-out">
          <img src="/vent-out.jpeg" alt="vent-out" width={500} height={500} />
          <div>
            <h1>Vent It Out!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              suscipit tenetur ipsam animi, eveniet perspiciatis vero officia
              qui id, debitis vel expedita natus deleniti voluptates quis eius.
              Quasi, optio laboriosam.
            </p>
            <a href="/moodtracker">Join Now!</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
