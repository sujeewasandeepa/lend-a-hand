import "../assets/SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchPasswords, setMatchPasswords] = useState(true);

  const navigate = useNavigate();

  const checkPasswords = () => {
    if (password == confirmPassword) {
      setMatchPasswords(true);
    } else {
      setMatchPasswords(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkPasswords();

    if (matchPasswords) {
      const data = new FormData(e.target);
      const form = {
        name: data.get("name"),
        address: data.get("address"),
        NIC: data.get("nic"),
        phone_number: data.get("phone_number"),
        hashed_password: data.get("password"),
      };

      console.log(form.hashed_password);
      const res = await fetch("http://localhost:4000/api/employer", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        console.log("all is well!");
      }
    } else {
      console.log("passwords don't match!");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <>
      <h1 className="title is-1 has-text-centered my-5">Sign Up</h1>
      <div className="half-width">
        <form className="mx-2" onSubmit={handleSubmit}>
          <div className="field">
            <div className="label">Name</div>
            <div className="control">
              <input
                placeholder="name"
                name="name"
                type="text"
                pattern="^[A-Za-z]+$"
                className="input"
                required="true"
              />
            </div>
          </div>

          <div className="field">
            <div className="label">Address</div>
            <div className="control">
              <input
                placeholder="Address"
                name="address"
                type="text"
                required="true"
                pattern="^[a-zA-Z0-9,]+$"
                className="input"
              />
            </div>
          </div>

          <div className="field">
            <div className="label">NIC</div>
            <div className="control">
              <input
                placeholder="NIC"
                required="true"
                name="nic"
                type="text"
                pattern="^[vV0-9,]+$"
                className="input"
              />
            </div>
          </div>

          <div className="field">
            <div className="label">Phone Number</div>
            <div className="control">
              <input
                placeholder="Phone Number"
                name="phone_number"
                required="true"
                type="text"
                pattern="^[0-9+]+$"
                className="input"
              />
            </div>
          </div>

          <div className="field">
            <div className="label">Password</div>
            <p className="help">
              Password should include at least one Upper case letter, one lower
              case letter and one numerical value. The total length should be at
              least 8.
            </p>
            <div className="control">
              {!matchPasswords && (
                <p className="has-text-danger my-2">Passwords do not match!</p>
              )}
              <input
                placeholder="Password"
                required="true"
                type="password"
                name="password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                className="input"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                placeholder="Confirm Password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                required="true"
                type="password"
                className="input mt-1"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <p className="mb-1">
              By submitting this form, you are agreeing to our
              <a className="link"> terms and conditions</a>
            </p>
          </div>

          <input type="submit" value="submit" className="button is-primary" />
          <button
            onClick={handleCancel}
            className="button is-primary-light ml-1"
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
}
