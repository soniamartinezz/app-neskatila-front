import { Link } from 'react-router-dom';

function LoginButton({ username }) {
  // Función para convertir la primera letra a mayúscula
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  // Verificar si hay un nombre de usuario y lo convierte a mayúscula
  const formattedUsername = username ? capitalizeFirstLetter(username) : null;

  return (
    <>
      {formattedUsername ? (
        <span className="show-username">{formattedUsername}</span>
      ) : (
        <Link to="/login">
          <button type="button">Iniciar sesión</button>
        </Link>
      )}
    </>
  );
}

export default LoginButton;
