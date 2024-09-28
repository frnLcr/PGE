import {Link} from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav>
        <Link to={'/Ejercicio1'}>  
            <button className="nav-button">
                Ejercicio 1
            </button>
        </Link>
        <Link to={'/Ejercicio2'}>
            <button className="nav-button">
                Ejercicio 2
            </button>   
        </Link>
        <Link to={'/Ejercicio3'}>
            <button className="nav-button">
                Ejercicio 3
            </button>
        </Link>
        <Link to={'/Ejercicio4'}>
            <button className="nav-button">
                Ejercicio 4
            </button>
        </Link>
        <Link to={'/Ejercicio5'}>
            <button className="nav-button">
                Ejercicio 5
            </button>
        </Link>
        <Link to={'/Ejercicio6'}>
            <button className="nav-button">
                Ejercicio 6
            </button>
        </Link>
        <Link to={'/Ejercicio7'}>
            <button className="nav-button">
                Ejercicio 7
            </button>
        </Link>
        <Link to={'/Ejercicio8'}>
            <button className="nav-button">
                Ejercicio 8
            </button>
        </Link>
        <Link to={'/Ejercicio9'}>
            <button className="nav-button">
                Ejercicio 9
            </button>
        </Link>
        <Link to={'/Ejercicio10'}>
            <button className="nav-button">
                Ejercicio 10
            </button>
        </Link>    
        </nav>
    )
}
