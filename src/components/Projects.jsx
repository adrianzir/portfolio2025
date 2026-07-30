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
              title="Personal Finance Tracker"
              body="Personal Finance Tracker – Web application for managing personal finances, allowing users to record income and expenses, organize transactions by category, and visualize financial data through interactive dashboards. Built with Flask, SQLAlchemy, SQLite, and Chart.js."
              img="/finance_tracker_img_1.JPG"
              link="https://github.com/adrianzir/finance-tracker-app"
              altImg="landing page Finance Traker"
              skill1="Python"
              skill2="Flask"
              skill3="JavaScript"
              skill4="SQLite"
              skill5="SQLAlchemy"
            />
            <Rectangle
              title="Gym routines APP"
              body="GYM-APP – Web application for managing gym workout routines (Push/Pull/Legs), built with Flask, Jinja2, and JavaScript. It allows users to create, edit, and delete workout routines with multiple exercises dynamically, using JSON for data persistence."
              img="/gym_app_img_1.JPG"
              altImg="landing page gym app"
              link="https://gym-app-u2d1.onrender.com"
              skill1="Python"
              skill2="Flask"
              skill3="JavaScript"
              skill4="JSON"
              dpskill5="display"
            />
            <Rectangle
              title="Ensurance CO. Portal"
              body="Frontal Seguros – Web-based insurance platform that allows users to browse available insurance products and purchase policies online. Customers can register, log in, complete the purchase process, and access a personalized dashboard to manage their policies. The backend was developed with Python and Django, using SQLite as the database, while the frontend was built with the Django template engine and styled with modern, responsive CSS.
                "
              img="/frontal_seguros_img_1.JPG"
              link="https://github.com/adrianzir/ensurance-co-app"
              altImg="Landing page of Frontal Seguros"
              skill1="Python"
              skill2="Django"
              skill3="SQLite"
              skill4="HTML5 & CSS3"
              skill5="Antigravity IDE - AI Agent"
            />
            <Rectangle
              title="Web Store"
              body="Online web clothing store, a simple e-commerce site where users can browse products, add to cart, and simulate checkout."
              img="/wild_store_img.JPG"
              link=""
              altImg="Wildd Store Image https://adrianzir.github.io/wild_clothes_2/"
              skill1="HTML5 & CSS3"
              skill2="JavaScript"
              skill3="SASS"
              skill4="Responsive Design"
              dpskill5="display"
            />
            <Rectangle
              title="Football App"
              body="Football Stats App – built with React and Vite that consumes the APIFootball REST API to display football statistics. The application retrieves countries, competitions, and top scorers, manages asynchronous requests with Fetch API, and uses React Router for client-side navigation. Data is managed through React Hooks (useState and useEffect) and rendered dynamically based on user selections."
              img="/futbol_app_img_1.JPG"
              altImg=""
              link="https://github.com/adrianzir/futbol-app"
              skill1="React"
              skill2="VITE"
              skill3="REST API (APIFootball)"
              skill4="Javascript"
              dpskill5="display"
            />
          </div>
        </div>
      </div>
    );
}

export default Projects;

