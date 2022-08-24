import React from "react";
import LogoDanone from "../assets/imgs/logo-danone.png";
import LogoFooter from "../assets/imgs/logo-footer.png";

const Form = () => {
  return (
    <footer>
      <picture>
        <img src={LogoDanone} alt="Logo Danone" className="h-3rem" />
        <img src={LogoFooter} alt="Logo FooterVitalinea" className="h-2rem" />
      </picture>
      <p>
        Términos y condiciones| Políticas de privacidad | Aviso de privacidad
      </p>

      <p>Danone de México 2017 ©. Todos los derechos reservados 2017</p>
    </footer>
  );
};

export { Form };
