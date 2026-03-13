// import { useState } from "react";

// function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login Data:", formData);

//     // Here you can connect backend API
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>

//       <form onSubmit={handleSubmit} className="login-form">
        
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="login-btn">
//           Login
//         </button>

//       </form>
//     </div>
//   );
// }

// export default Login;

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
}

export default Login;