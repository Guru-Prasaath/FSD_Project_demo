import React from "react";
import "./App.css";
import Header from "./Header";
import Content from "./content";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />

      <Footer />

      <p className="note">
        <span className="highlight">Inline styles</span> in React are given
        <span className="important"> higher precedence </span>
        than styles defined in <b>external CSS files</b>.
      </p>
    </div>
  );
}

export default App;