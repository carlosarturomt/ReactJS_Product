import React from "react";
import { NavBar } from "../templates/NavBar/NavBar";
import { WelcomeVita } from "../templates/WelcomeVita";
import { About } from "../templates/About/About";
import { Products } from "../templates/Products/Products";
import { Form } from "../templates/Footer";

import "../styles/style.css";


function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <WelcomeVita/>
        <About/>
        <Products />
        <Form/>
      </main>
    </div>
  );
}

export default App;
