import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div id="home-container">
      <h1 className="mb-4">Welcome to Home Page</h1>
      <div className="d-flex gap-3">
        <button  id="register-btn" className="btn btn-dark 4px" onClick={() => navigate("/")}>
          Register
        </button>
        <button id="login-btn" className="btn btn-dark 4px" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </div>
  );
}