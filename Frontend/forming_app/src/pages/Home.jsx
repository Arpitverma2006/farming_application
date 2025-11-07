import React from "react";

function Home() {
  return (
    <div>
        {/* do code here  */}
        <header>
          <a href="index.html" class="logo">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="64" height="64" rx="12" fill="#114B0A"/>
              <g transform="translate(8,8)" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 34h28v-8l6-6-6-10H22"/>
                <circle cx="10" cy="32" r="6" fill="#ffdd66" stroke="none"/>
                <circle cx="34" cy="32" r="6" fill="#ffdd66" stroke="none"/>
              </g>
            </svg>
            <div>
              <div class="brand-title">UnnatiKrishi</div>
              <div class="brand-sub">Empowering Farmers</div>
            </div>
          </a>

          <a href="registration.html" class="reg-btn">Registration</a>
        </header>

        {/* <!-- 🌾 Main Hero Section --> */}
        <section class="main-content">
          <h1>Apni Kheti Mein Unnati Lao – Technology ke Saath Badho Aage</h1>
          <p>UnnatiKrishi ek smart farming platform hai jo kisano ko sahi fasal jaankari, mandi rate aur mausam updates deta hai. Aaj hi register karke apni kheti ko naye daur mein le jao.</p>
          <a href="registration.html" class="cta">Register Now</a>
        </section>

        {/* <!-- ⚙️ Footer --> */}
        <footer>
          © 2025 UnnatiKrishi — Together We Grow Stronger
        </footer>

    </div>
  );
}

export default Home;