// import { useState } from "react";
// import Header from "./layout/Header";
// import footer from "./layout/Footer";
// import { response } from "express";
// import axios from "axios";

// function Login({updateUserDetails}) {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [message, setMessage] = useState(null);

//   const handleChange = async(e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const validate = () => {
//     let isValid = true;
//     let newErrors = {};

//     if (formData.username.trim() === '') {
//       isValid = false;
//       newErrors.username = "Username is mandatory";
//     }

//     if (formData.password.trim() === '') {
//       isValid = false;
//       newErrors.password = "Password is mandatory";
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit =async (e) => {
//     e.preventDefault();

//     if (validate()) {
//       const body={
//         username: formData.username,
//         password: formData.password
//       };
//       const config={
//         withCredentials: true
//       };
//       try{
//       const response=await axios.post('http://localhost:5001/auth/login',body,config');

//    //     if (formData.username === 'admin' && formData.password === 'admin') {
//   //       // setMessage('✅ Valid Credentials');
//   //       updateUserDetails({
//   //         name: 'john cena',
//   //         email: 'john.cena@gmail.com',
//   //     });
//   //     } else {
//   //       setMessage('❌ Invalid Credentials');
//   //     }
//   //   } else {
//   //     setMessage(null);
//     }
//   };

//   return (
//     <>
//     <Header />
//     <div className="container text-center mt-4">
//       {message && <p><strong>{message}</strong></p>}

//       <h1>Login Page</h1>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label><br />
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//           <br />
//           {errors.username && <span style={{ color: "red" }}>{errors.username}</span>}
//         </div>

//         <div className="mt-3">
//           <label>Password:</label><br />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <br />
//           {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
//         </div>

//         <div className="mt-4">
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//     {footer()}
//     </>
//   );
// }

// export default Login;


import React, { useState } from "react";
import axios from "axios";
function Login({ updatedUserDetails }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.username.trim()) {
      isValid = false;
      newErrors.username = "Username is mandatory";
    }
    if (!formData.password.trim()) {
      isValid = false;
      newErrors.password = "Password is mandatory";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (validate()) {
      const body={
        username:formData.username,
        password:formData.password
      };
      const config={
        withCredentials:true
      };
      try{
      const response= await axios.post('http://localhost:5000/auth/login', body, config);
      updatedUserDetails(response.data.user);
      }
      catch(error){
        console.error(error);
        setErrors({message:"Something went wrong. Please try again."});
      }
  }
  };
  return (
    <div style={{ textAlign: "center" }}>
      {message && <p>{message}</p>}
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label><br />
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <p style={{ color: "red" }}>{errors.username}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">Password:</label><br />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;