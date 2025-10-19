import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import logoImg from './assets/logo.png';
import imgMkj from './assets/banner.png';
import googlePlayIcon from './assets/google-play.png';


import currency from './assets/app/currency.png';


import PolicyPage from './PolicyPage';

function Header() {
  const location = useLocation();
  const isPolicyPage = location.pathname === '/policy';

  return (
      <header className="header">
          <div className="container header-container">
            <div className="header-left">
              <div className="logo-wrapper">
                <img src={logoImg} alt="MESA LABORA" className="logo-img" />
                <span className="studio-name">MESA LABORA</span>
              </div>
            </div>

            {!isPolicyPage && (
              <nav className="nav">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/policy" className="nav-link">POLICY</Link>
                <a href="#contact" className="nav-link">CONTACT</a>
              </nav>
            )}
          </div>
        </header>
  );
}

function HomePage() {
  const apps = [
    {
      name: 'Expense Tracker: Money Planner',
      image: currency,
      link: 'https://play.google.com/store/apps/details?id=com.moneymanager.budgetplanner.trackmoney.dailyexpensetracker'
    }
  ];

  return (
    <>
      <section id="about" className="section about">
        <div className="container about-row">
          <div className="about-text-container">
            <h2 className="highlight-title">MESA LABORA – Welcome Aboard</h2>
            <p className="about-text">MESA LABORA is a forward-looking mobile app studio focused on building dependable, innovative, and intuitive applications. We strive to blend creativity with functionality, delivering products that span casual gaming, productivity, lifestyle, and education. Each app we develop is carefully crafted with the user in mind — featuring smooth navigation, refined details, and practical benefits — to make daily life simpler, smarter, and more enjoyable for users worldwide.
            </p>
          </div>
          <div className="about-img-container">
            <img src={imgMkj} alt="About MKJ Studio" className="about-img" />
          </div>
        </div>
      </section>

      <section id="games" className="section games">
        <div className="container">
          <h2 className="text-center">Productivity Tools</h2>
          <div className="game-grid">
            {apps.map((game, index) => (
              <div key={index} className="game-card">
                <img src={game.image} alt={game.name} />
                <div className="game-info">
                  <h3>{game.name}</h3>
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="btn btn-google-play">
                    <img src={googlePlayIcon} alt="Google Play" className="google-play-icon" />
                    Get on Google Play
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, requyest support, please contact us at:<br />
            <a href="mailto:  HuffmanWilliams5g3nu0@gmail.com">  HuffmanWilliams5g3nu0@gmail.com</a><br />
            <span style={{ display: 'inline-block', marginTop: '10px' }}>
              🏠 MYCROFT LTD
                Stonevue Cottage
                Cawdor
                NAIRN - IV12 5QY
                Vương quốc Anh (GB)
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} MESA LABORA. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
