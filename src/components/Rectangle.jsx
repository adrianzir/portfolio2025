import React from "react";
import "../stylesheets/basics.css";
import "../stylesheets/projects.css";

function Rectangle(props) {
    if (props.skills1, props.skill2, props.skill3, props.skill4, props.skill5 === undefined) {
        
    }
    return <div className="card">
        <div className="upper-block">
        <h3>{props.title}</h3>
        <img className="rectangle_img" src={`${process.env.PUBLIC_URL}/images${ props.img }`} alt={props.altImg} />
        <div className="center">{props.body}</div>
        </div>
        <div className="lower-block">
        <div className="center skills">
            <div className="center" id="skills_div"> 
                <span className={`skill_span ${props.dpskill1}`}>{props.skill1}</span>
                <span className={`skill_span ${props.dpskill2}`}>{props.skill2}</span>
                <span className={`skill_span ${props.dpskill3}`}>{props.skill3}</span>
                <span className={`skill_span ${props.dpskill4}`}>{props.skill4}</span>
                <span className={`skill_span ${props.dpskill5}`}>{props.skill5}</span>
            </div>
        </div>

        <a class="btn" href={props.link} target="_blank">Link</a>
        </div>
    </div>;
}

export default Rectangle;