import React from "react";

function login() {
  return (
    <div>
        {/* do code here  */}

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unnati Krishi Login</title>
  <link rel="stylesheet" href="Login1.css" />
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
       
<body>
  <div class="container">
    <div class="login-box">           
      <h2>Unnati Krishi Login</h2>
      
      <form id="loginForm">
        <div class="input-box">
          <i class="fas fa-envelope"></i>
          <input type="email" id="email" required />
          <label>Email</label>
        </div>

        <div class="input-box">
          <i class="fas fa-lock"></i>
          <input type="password" id="password" required />
          <label>Password</label>
        </div>

        <button type="submit" class="btn">Login</button>

        <button onclick="goRegister()" class="register-btn">
            <i class="fas fa-user-plus"></i> Register
        </button>
      </form>
    </div>
  </div>

  <script src="Login1.js"></script>
</body>

        
    </div>
  );
}

export default login;