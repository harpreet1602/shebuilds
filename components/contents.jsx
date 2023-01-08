const Content = () => {
  return (
    <>
      <div className="content">
        <div className="content-box mood">
          <img src="/mood.jpg" alt="mood" width={500} height={500} />
          <div>
            <h1 className="text-[30px] italic">Self Assessment Tool</h1>
            <p>
              An AI driven bot that uses Cognitive Behavioral Therapy (CBT)
              technique to help users access their mental health and identify
              areas that may need attention. It “makes you feel heard”. Its
              self-help tools help you reframe your issues and see them in a
              different light.
            </p>
            <a href="/moodtracker" className="hover:underline">
              Try Now!
            </a>
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
            <h1 className="text-[30px] italic">Education</h1>
            <p>
              Helps you to understand and get a deeper in-sight on various
              Mental-health topics like Anxiety, Depression, Addiction,
              Personality Disorder, etc in a unique way through story-telling.
            </p>
            <a href="/education" className="hover:underline">
              Learn More
            </a>
          </div>
        </div>
        <div className="content-box vent-out">
          <img src="/vent-out.jpeg" alt="vent-out" width={500} height={500} />
          <div>
            <h1 className="text-[30px] italic">Vent It Out!</h1>
            <p>
              It is a safe and supportive space for people to share their
              thoughts, feelings, and experiences related to mental health.
              Whether you're looking for a place to vent your frustrations, seek
              support from others, or simply connect with others who understand
              what you're going through, you are welcome here.
            </p>
            <a href="/vent-it-out" className="mt-4 hover:underline">
              Join Now!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
