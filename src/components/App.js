import React, { useState } from "react";
import Header from "./ui/Header";
import Footer from "./ui/footer";
import Theme from "./ui/Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./landingPage";
import Services from "./services";
import CustomSoftware from "./customsoftwares";
import MobileApp from "./mobileApp";

import Home from "./Home";
import Revolution from "./revolution";
import About from "./about";
import Contact from "./contact";

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={Theme}>
      <Header
        value={value}
        setValue={setValue}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />
          }
        />
        <Route
          path="/services"
          element={
            <Services setValue={setValue} setSelectedIndex={setSelectedIndex} />
          }
        />
        <Route
          path="/customsoftwares"
          element={
            <CustomSoftware
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />
          }
        />
        <Route
          path="/mobileapps"
          element={
            <MobileApp
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          }
        />
        <Route path="/websites" element={<Home />} />
        <Route path="/revolution" element={<Revolution />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/estimate" element={<Home />} />
      </Routes>
      <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
    </ThemeProvider>
  );
}

export default App;
