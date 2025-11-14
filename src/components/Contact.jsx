import "../stylesheets/buttons.css";
import "../stylesheets/basics.css";
import "../stylesheets/contact.css";
//import styles ^ -- import components v
import Button from "./Button";
//import icons
import { VscGithubInverted } from "react-icons/vsc";
import { FaArrowUp } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";


function Contact() {

    return (
        <div className="container" id="contact">
            <h2>Contact</h2>
            <p>If you'd like to get in touch, please reach out via email or social media.</p>
            <div className="social-icons">
                <a className="icon" href="https://www.linkedin.com/in/adrian-zambrano-058a741a1/" target="_blank"><ImLinkedin /></a>
                <a className="icon" href="https://www.instagram.com/adrian.ed20/" target="_blank"><GrInstagram /></a>
                <a className="icon" href="https://github.com/adrianzir" target="_blank"><VscGithubInverted /></a>
            </div>
            <Button 
            classNameBtn="scroll-top "
            text= {<FaArrowUp />}
            btnFunction={ () => window.scrollTo({ top: 0, behavior: 'smooth' }) }
            ></Button> 
        </div>
    );
}
export default Contact;