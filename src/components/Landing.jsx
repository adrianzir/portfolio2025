import "../stylesheets/basics.css";
import "../stylesheets/buttons.css";
import "../stylesheets/landing.css";

function Landing() {
    return (
        <div className="landing container" id="about">
            <h1 className="landing-h1">ADRIAN ZAMBRANO</h1>
            <h1>Software Developer</h1>
            <p className="continer">Student in Computer Analysis and Programming, currently in the final stage of the program, with a strong interest in backend development using Python. I have knowledge of web development, relational databases, REST API integration, version control with Git, and Agile methodologies. I stand out for my analytical mindset, self-directed learning, and effective use of Artificial Intelligence (AI)tools to accelerate software development, documentation, and problem-solving. This is my portfolio website where you can discover my projects and skills in web development.</p>
            <button className="btn" onClick={ () => window.open(`${process.env.PUBLIC_URL}/documents/CV-2026-dev.pdf`, "_blank")}>My CV</button>
        </div>
    );
}

export default Landing;
