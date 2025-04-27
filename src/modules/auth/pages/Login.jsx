import { Link } from "react-router-dom"
import { LoginForm } from "../components/LoginForm/LoginForm"


export const LoginPage = () => {
    return (
        <>
            <h2>Iniciar Sesión</h2>
            <LoginForm />
            <p>
                ¿No tienes cuenta? <Link to="https://proyecto6-sgv2.onrender.com/api/v1/user/register">Regístrate</Link>
            </p>
        </>
    )
}