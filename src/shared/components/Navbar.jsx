import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../modules/auth/context/AuthContext"


export const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    return (
        <nav className="flex justify-between m-5 bg-blue-300 text-white" id="navbar">
            <ul className="flex flex-row gap-x-3 text-white">
                <li><Link to="/">Inicio</Link></li>
                <p>|</p>
                <li><Link to="/about">Sobre nosotros</Link></li>
                <p>|</p>
                <li><Link to="/products">Discografía</Link></li>
            </ul>
            <div className="text-white">
                {
                    !user ? (
                        <Link to="/login">Iniciar Sesión</Link>
                    ) : (
                        <div className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" id="navbar">
                            <span>{user.nombre} {user.apellido}</span>
                            <Link to={'/'} onClick={ handleLogout} >Logout</Link>
                        </div>
                    )
                }
            </div>
        </nav>

    )
}