import "../assets/SignUp.css";

export default function SignUp() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const form = {
      name: data.get("name"),
      address: data.get("address"),
      NIC: data.get("nic"),
      phone_number: data.get("phone_number"),
      hashed_password: data.get("password")
    };

    console.log(form);

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
  }

  return (
    <>
      <h1 className="title is-1 has-text-centered my-5">Sign Up</h1>
      <div className="half-width">

        <form className="mx-2" onSubmit={handleSubmit}>
          <div className="field">
            <div className="label">Name</div>
            <div className="control">
              <input placeholder="name" name="name" type="text" className="input" />
            </div>
          </div>

          <div className="field">
            <div className="label">Address</div>
            <div className="control">
              <input placeholder="Address" name="address" type="text" className="input" />
            </div>
          </div>

          <div className="field">
            <div className="label">NIC</div>
            <div className="control">
              <input placeholder="NIC" name="nic" type="text" className="input" />
            </div>
          </div>

          <div className="field">
            <div className="label">Phone Number</div>
            <div className="control">
              <input placeholder="Phone Number" name="phone_number" type="text" className="input" />
            </div>
          </div>

          <div className="field">
            <div className="label">Password</div>
            <div className="control">
              <input placeholder="Password" type="password" name="password" className="input" />
              <input
                placeholder="Confirm Password"
                type="password"
                className="input mt-1"
              />
            </div>
          </div>

          <div>
            <p className="mb-1">
              By submitting this form, you will be agreeing to our termins and conditions. 
            </p>
          </div>

          <input type="submit" value="submit" className="button is-primary" />
          <button className="button is-primary-light ml-1">Cancel</button>
        </form>

      </div>
    </>
  );
}
