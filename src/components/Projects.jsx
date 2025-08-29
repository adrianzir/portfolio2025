import "../stylesheets/basics.css";
import Rectangle from "./Rectangle";

function Projects() {
    return (
        <div className="container" id="projects">
            <h2>Projects</h2>
            <p>Here are some of my recent works in web development.</p>
            <div className="center">
            <Rectangle
            title="Notes App with Python"
            body="Un video donde se nota nuestra actuación al nivel Tim Cook (CEO de Apple, dicen que es mal actor), pero que vale la pena verlo: contamos qué estamos haciendo, mostramos parte del equipo y algunas pistas de lo que se viene."
            img="" 
            altImg=""
            />
            <Rectangle
            title="Documents converter"
            body="Un video donde se nota nuestra actuación al nivel Tim Cook (CEO de Apple, dicen que es mal actor), pero que vale la pena verlo: contamos qué estamos haciendo, mostramos parte del equipo y algunas pistas de lo que se viene."
            img="" 
            altImg=""
            />
            <Rectangle
            title="Football App"
            body="Un video donde se nota nuestra actuación al nivel Tim Cook (CEO de Apple, dicen que es mal actor), pero que vale la pena verlo: contamos qué estamos haciendo, mostramos parte del equipo y algunas pistas de lo que se viene."
            img="" 
            altImg=""
            />
            </div>
        </div>
    );
}

export default Projects;

