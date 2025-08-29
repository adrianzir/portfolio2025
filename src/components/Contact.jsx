import "../stylesheets/buttons.css";
import "../stylesheets/basics.css";
import Button from "./Button";
import React, { useState, useEffect } from "react";


function Contact() {

    return (
        <div className="container" id="contact">
            <h2>Contact</h2>
            <p>If you'd like to get in touch, please reach out via email or social media.</p>
            <Button 
            classNameBtn="scroll-top "
            text="⮝"
            btnFunction={ () => window.scrollTo({ top: 0, behavior: 'smooth' }) }
            ></Button>
        </div>
    );
}
export default Contact;