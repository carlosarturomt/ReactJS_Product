import React from "react";
import { NavBar } from "../templates/NavBar/NavBar";
import { WelcomeVita } from "../templates/WelcomeVita";
import { InfNutri } from "../templates/InfNutri";
import { FamVita } from "../templates/FamVita";
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
        <InfNutri/>
        <FamVita />
        <Form/>
      </main>
    </div>
  );
}

export default App;
