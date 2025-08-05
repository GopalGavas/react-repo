import { useState } from "react";

// const RegisterForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <h2>
//         Name: {name}, Email: {email}, Password: {password}, Confirm Password:{" "}
//         {confirmPassword}
//       </h2>
//       <form>
//         <label>Name</label>
//         <br />
//         <input
//           onChange={(event) => setName(event.target.value)}
//           type="text"
//         ></input>
//         <br />
//         <label>Email</label> <br />
//         <input
//           onChange={(event) => setEmail(event.target.value)}
//           type="email"
//         ></input>
//         <br />
//         <label>Password</label> <br />
//         <input
//           onChange={(event) => setPassword(event.target.value)}
//           type="password"
//         ></input>
//         <br />
//         <label>Confirm Password</label> <br />
//         <input
//           onChange={(event) => setConfirmPassword(event.target.value)}
//           type="password"
//         ></input>
//       </form>
//     </div>
//   );
// };

const RegisterForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleEvent = (event) => {
    // console.log(event.target.value);
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      userData.name &&
      userData.email &&
      userData.password &&
      userData.confirmPassword
    ) {
      alert("All fields submitted successfully");
      setUserData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <h2>
        Name: {userData.name}, Email: {userData.email}, Password:
        {userData.password}, Confirm Password:
        {userData.confirmPassword}
      </h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          name="name"
          onChange={handleEvent}
          value={userData.name}
          type="text"
        ></input>
        <br />
        <label>Email</label> <br />
        <input
          name="email"
          onChange={handleEvent}
          value={userData.email}
          type="email"
        ></input>
        <br />
        <label>Password</label> <br />
        <input
          name="password"
          onChange={handleEvent}
          value={userData.password}
          type="password"
        ></input>
        <br />
        <label>Confirm Password</label> <br />
        <input
          name="confirmPassword"
          onChange={handleEvent}
          value={userData.confirmPassword}
          type="password"
        ></input>{" "}
        <br />
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default RegisterForm;
