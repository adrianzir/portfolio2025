import "../stylesheets/basics.css";
import "../stylesheets/projects.css";
import "../stylesheets/buttons.css";
import Rectangle from "./Rectangle";

function Projects() {
    return (
        <div className="container" id="projects">
            <h1>PROJECTS</h1>
            <p>Here are some of my recent works in web development.</p>
            <div className="center projects-section">
                <div className="projects-carousel">
                <Rectangle
                title="Dashboard for personal finances"
                body="Personal Finance Tracker – Web application for managing personal finances, allowing users to record income and expenses, organize transactions by category, and visualize financial data through interactive dashboards. Built with Flask, SQLAlchemy, SQLite, and Chart.js."
                img="" 
                altImg=""
                skill1="Python"
                skill2="Flask"
                skill3="JavaScript"
                skill4="SQLite" 
                skill5 ="SQLAlchemy"
                />
                <Rectangle
                title="App de rutinas de gimnasio"
                body="GYM-APP – Web application for managing gym workout routines (Push/Pull/Legs), built with Flask, Jinja2, and JavaScript. It allows users to create, edit, and delete workout routines with multiple exercises dynamically, using JSON for data persistence."
                img="\gym_app_img_1.JPG" 
                altImg="landing page gym app"
                link="https://gym-app-u2d1.onrender.com"
                skill1="Python"
                skill2="Flask"
                skill3="JavaScript"
                skill4="JSON" 
                dpskill5 ="display"           
                />
                <Rectangle
                title="Portal de venta seguros"
                body="Frontal Seguros – Web-based insurance platform that allows users to browse available insurance products and purchase policies online. Customers can register, log in, complete the purchase process, and access a personalized dashboard to manage their policies. The backend was developed with Python and Django, using SQLite as the database, while the frontend was built with the Django template engine and styled with modern, responsive CSS.
                "
                img=""
                altImg=""
                skill1="Python"
                skill2="Django"
                skill3="SQLite"
                skill4="HTML5 & CSS3"
                skill5="Antigravity IDE - AI Agent"
                />
                <Rectangle
                title="Web Store"
                body="Online web clothing store, a simple e-commerce site where users can browse products, add to cart, and simulate checkout."
                img="\wild_store_img.JPG"
                link="https://adrianzir.github.io/wild_clothes_2/"
                altImg="Wildd Store Image"
                skill1="HTML5 & CSS3"
                skill2="JavaScript"
                skill3="SASS"
                skill4="Responsive Design"
                dpskill5="display"
                />
                <Rectangle
                title="Working on it"
                body=""
                img=""
                altImg=""
                dpskill1="display"
                dpskill2="display"
                dpskill3="display"
                dpskill4="display"
                dpskill5="display"
                />
                </div>
            </div>
        </div>
    );
}

export default Projects;

