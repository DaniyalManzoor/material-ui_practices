import React from "react";
import Header from "./ui/Header";
import Footer from "./ui/footer";
import Theme from "./ui/Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Services from "./services";
import Revolution from "./revolution";
import About from "./about";
import Contact from "./contact";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/customsoftwares" element={<Home />} />
        <Route path="/mobileapps" element={<Home />} />
        <Route path="/websites" element={<Home />} />
        <Route path="/revolution" element={<Revolution />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/estimate" element={<Home />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
