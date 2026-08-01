import React from "react";
import "../stylesheets/basics.css";
import "../stylesheets/projects.css";
import { useState, useEffect, useRef } from "react";

function Rectangle(props) {
  const [mensaje, setMensaje] = useState("");
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const textRef = useRef(null);
  useEffect(() => {
    const element = textRef.current;

    if (element.scrollHeight > element.clientHeight) {
      setShowButton(true);
    }
  }, []);

  useEffect(() => {
    const element = textRef.current;

    if (!element) return;

    console.log("clientHeight:", element.clientHeight);
    console.log("scrollHeight:", element.scrollHeight);

    setShowButton(element.scrollHeight > element.clientHeight);
  }, [props.body]);

  function expandParagragh() {
    setExpanded(!expanded);
  }

  return (
    <div className="card">
      <div className="upper-block">
        <h3>{props.title}</h3>
        <img
          className="rectangle_img"
          src={`${process.env.PUBLIC_URL}/images${props.img}`}
          alt={props.altImg}
        />
        <div
          className={`center rectangle_div_p ${expanded ? "expanded" : ""}`}
          ref={textRef}
        >
          <p className="rectangle_body_p">{props.body}</p>
        </div>
        {showButton && (
          <button className="rectangle_btn_expand_p" onClick={expandParagragh}>
            {expanded ? "See less" : "See more"}
          </button>
        )}
      </div>
      <div className="lower-block">
        <div className="center skills">
          <div className="center" id="skills_div">
            <span className={`skill_span ${props.dpskill1}`}>
              {props.skill1}
            </span>
            <span className={`skill_span ${props.dpskill2}`}>
              {props.skill2}
            </span>
            <span className={`skill_span ${props.dpskill3}`}>
              {props.skill3}
            </span>
            <span className={`skill_span ${props.dpskill4}`}>
              {props.skill4}
            </span>
            <span className={`skill_span ${props.dpskill5}`}>
              {props.skill5}
            </span>
          </div>
        </div>

        <a
          className="btn"
          href={props.link || "#"}
          target="_blank"
          onClick={(e) => {
            if (!props.link) {
              e.preventDefault();
              setMostrarPopup(true);
              setTimeout(() => {
                setMostrarPopup(false);
              }, 3000);
            }
          }}
        >
          Open
        </a>

        {mostrarPopup && (
          <p className="popup">Currently this link is not available.</p>
        )}
      </div>
    </div>
  );
}

export default Rectangle;
