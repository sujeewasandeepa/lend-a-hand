import "../assets/SignUp.css";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/');
  }

  const goToRegister = () => {
    navigate('/signup');
  }

  return (
    <>
      <h1 className="title is-1 has-text-centered my-5">Login</h1>

      <div className="half-width">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <div className="label">NIC</div>
            <div className="control">
              <input
                placeholder="NIC"
                required={true}
                name="nic"
                type="text"
                pattern="^[vV0-9,]+$"
                className="input"
              />
            </div>
          </div>
          <div className="field">
            <div className="label">Password</div>
            <div className="control">
              <input
                placeholder="Password"
                required={true}
                type="password"
                name="password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                className="input"
              />
            </div>
          </div>
          <input type="submit" className="button is-primary" value="LogIn"/>
          <button onClick={handleCancel} className="button is-primary-light ml-1">Cancel</button>
          <p className="mt-2">Don't have an account? <span className="link has-text-info" onClick={goToRegister}>register</span></p>
        </form>
      </div>
    </>
  );
}
