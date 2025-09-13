import "../stylesheets/basics.css";
import "../stylesheets/projects.css";
import Rectangle from "./Rectangle";

function Projects() {
    return (
        <div className="container" id="projects">
            <h2>Projects</h2>
            <p>Here are some of my recent works in web development.</p>
            <div className="center projects-section">
                <div className="projects-carousel">
                <Rectangle
                title="Notes App with Python"
                body="Un video donde se nota nuestra actuación al nivel Tim Cook (CEO de Apple, dicen que es mal actor), pero que vale la pena verlo: contamos qué estamos haciendo, mostramos parte del equipo y algunas pistas de lo que se viene."
                img="" 
                altImg=""
                />
                <Rectangle
                title="API de autenticación con JWT"
                body="Proyecto: Sistema de registro e inicio de sesión con roles, una API REST con Express.js que permita: Registrar usuarios (nombre, email, contraseña encriptada con bcrypt).
                Iniciar sesión y devolver un token JWT.
                Acceder a rutas protegidas (ej: /perfil, /admin) solo si el usuario está autenticado.
                Definir roles (ej: usuario normal y administrador).
                Tecnologías:
                Node.js + Express
                JWT (jsonwebtoken)
                bcrypt para encriptar contraseñas
                MongoDB o PostgreSQL para almacenar usuarios
                Ejemplo de endpoints:
                POST /register → registrar usuario
                POST /login → devolver JWT
                GET /perfil → requiere token válido
                GET /admin → solo rol administrador"
                img="" 
                altImg=""
                />
                <Rectangle
                title="Football App"
                body="Resultados y estadísticas en tiempo real Mostrar partidos en curso, resultados y próximos partidos. Estadísticas de equipos y jugadores (goles, asistencias, tarjetas, posesión). Ranking de ligas nacionales e internacionales. Alertas de goles o finalización de partidos"
                img="" 
                altImg=""
                />
                <Rectangle
                title="Food Administrator"
                body="Aplicación que indique alimentos e ingredientes necesarios para la preparación de comidas con sus propiedades alimenticias, calorias, proteinas y demás Una app donde el usuario puede:
                Ver un listado de recetas (desde una API gratuita como TheMealDB
                ). Buscar recetas por nombre o ingrediente.
                Ver detalles: ingredientes, instrucciones y foto.
                Guardar recetas favoritas en AsyncStorage para acceso offline.
                Tecnologías: React Native (Expo para empezar más fácil), Fetch API / Axios, AsyncStorage (para persistencia local)
                Pantallas sugeridas:
                Home (lista de recetas)
                Búsqueda
                Detalle de receta
                Favoritos
                "
                img=""
                altImg=""
                />
                <Rectangle
                title="Web Store"
                body="Un video donde se nota nuestra actuación al nivel Tim Cook (CEO de Apple, dicen que es mal actor), pero que vale la pena verlo: contamos qué estamos haciendo, mostramos parte del equipo y algunas pistas de lo que se viene."
                img=""
                altImg=""
                />
                <Rectangle
                title="Web Store"
                body="Un video donde se nota nuestra actuación al nivel Tim Cook (CEO de Apple, dicen que es mal actor), pero que vale la pena verlo: contamos qué estamos haciendo, mostramos parte del equipo y algunas pistas de lo que se viene."
                img=""
                altImg=""
                />
                </div>
            </div>
        </div>
    );
}

export default Projects;

