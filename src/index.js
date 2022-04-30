import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <img src="./React-icon.png" alt="logo" className="logo"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <h1>Challenge 1: Part 2</h1>
      <ol>
        <li>Grows my brain noggin</li>
        <li>Increases number of synapses</li>
        <li>Makes it so I don't become a vegetable in my old age</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small>© 2022 Dawes development. All rights reserved</small>
    </footer>
  );
}

function Page() {
  return (
    <div className="page">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
