import "../stylesheets/basics.css";
import "../stylesheets/buttons.css";

function Button(props) {
    return <button onClick={ props.btnFunction } className={ props.classNameBtn } >{props.text}</button>;   
}

export default Button;