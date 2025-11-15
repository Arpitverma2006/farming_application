import React from "react";

function Regestration() {
  return (
    <div>
        {/* do code here  */}

  <div class="container">
    <h2>Sign Up to Get Started</h2>
    <form>
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your full name" required />
      </div>

      <div class="form-group">
        <label for="age">Age</label>
        <input type="number" id="age" name="age" placeholder="Enter your age" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
      </div>

      

      <div class="form-group">
        <label for="gender">Gender</label>
        <select id="gender" name="gender" required>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div class="form-group">
        <label for="mobile">Mobile No</label>
        <input type="tel" id="mobile" name="mobile" placeholder="Enter your mobile number" required />
      </div>

      <button type="submit">Register</button>
    </form>
  </div>

    </div>
  );
}

export default Regestration;