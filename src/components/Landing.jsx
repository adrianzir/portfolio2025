import "../stylesheets/basics.css";
import "../stylesheets/buttons.css";
import "../stylesheets/landing.css";

function Landing() {
    return (
        <div className="landing container" id="about">
            <h1 className="landing-h1">ADRIAN ZAMBRANO</h1>
            <h3>Fullstack Junior</h3>
            <p>Discover my projects and skills in web development.</p>
            <button className="btn" onClick={ () => window.open("/cv.pdf", "_blank")}>More info in my CV</button>
        </div>
    );
}

export default Landing;
