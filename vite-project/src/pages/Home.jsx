import  { useState } from "react";

function Home() {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: "",
  });
  const handleInput = (e) => {
  
    setData({
      ...data,
      [e.target.name]:
        e.target.name === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
    let errors = {};
    if (!data.name || data.name.trim() === "") {
      errors.name = "Name is required";
    }
    if (!data.username || data.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (!data.email || data.email.trim() === "") {
      errors.email = "Email is required";
    }
    if (!data.mobile || data.mobile.trim() === "") {
      errors.mobile = "Mobile is required";
    }
    if (!data.checkbox) {
      errors.checkbox = "Checkbox is required";
    }
    setErrors(errors);
    if (Object.keys(errors).length > 0) return;
    else {
      alert("form submitted successfully");
      localStorage.setItem("userData", JSON.stringify(data));
      setData({
        name: "",
        userName: "",
        email: "",
        mobile: "",
        checkbox: false,
      });
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "40vw",
          margin: "10% auto",
        }}>
        <input
          type="text"
          placeholder="Name"
          value={data.name}
          name="name"
          onChange={handleInput}
        />
        <span style={{ color: "red" }}>{errors.name}</span>
        <input
          type="text"
          placeholder="username"
          value={data.username}
          name="username"
          onChange={handleInput}
        />
        <span style={{ color: "red" }}>{errors.username}</span>
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          name="email"
          onChange={handleInput}
        />
        <span style={{ color: "red" }}>{errors.email}</span>
        <input
          type="tel"
          placeholder="Mobile"
          value={data.mobile}
          name="mobile"
          onChange={handleInput}
        />
        <span style={{ color: "red" }}>{errors.mobile}</span>
        <div>
          <input
            type="checkbox"
            id="checkbox"
            checked={data.checkbox}
            name="checkbox"
            onChange={handleInput}
          />
          <label htmlFor="checkbox">
            Share my registration data with Superapp
          </label>
        </div>
        <span style={{ color: "red" }}>{errors.checkbox}</span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;
