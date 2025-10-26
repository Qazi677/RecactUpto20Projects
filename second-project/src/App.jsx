import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Technology from "./components/Technology";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />

      <Footer />
      <Technology />
      <About/>
    </>
  );
}

export default App;
