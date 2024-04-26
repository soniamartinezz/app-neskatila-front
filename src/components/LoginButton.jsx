import { Link } from 'react-router-dom';

function LoginButton() {
    return (
      <div className="options-user">
        <Link to="/login">
          <button type="button">Login</button>
        </Link>
      </div>
    );
}

export default LoginButton;