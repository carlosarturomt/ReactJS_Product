import React from "react";
import ImageVitaFresa from "../assets/imgs/productVitalinea-fresa.png";

const WelcomeVita = () => {

  window.addEventListener('scroll', function(){
    let animation = this.document.getElementById('animate');
    let positionObjt1 = animation.getBoundingClientRect().top;
    let sizeScreen = window.innerHeight/3.5;

    if(positionObjt1 < sizeScreen) {
      animation.style.animation = 'rotate 1s ease-out';
    }
  })

  return (
    <section className="gradiant">
      <div className="flex-test">
        <aside className="gradiant__left">
          <img src={ImageVitaFresa} alt="producto Vitalínea" id="animate" />
        </aside>

        <aside className="gradiant__right">
          <article className="mt--3">
            <hgroup className="flex">
              <span>Sabor:</span>
              <h4 className="active">Fresa</h4>
              <h4>Guayaba</h4>
              <h4>Toronja</h4>
            </hgroup>
            <h2>Vitalínea® Bebible Fresa 217 gr.</h2>
            <p>
              ¡La presentación ideal para llevar contigo! Vitalínea bebible es
              la opción si eres de las personas que siempre están activas y
              quieren probar algo sano, rico y práctico.
            </p>

            <aside className="flex flex-start">
              <button>Comprar en Walmart</button>
            </aside>
            <aside className="flex flex-start">
              <span className="sello"></span>
              <span className="kcal"></span>
            </aside>
          </article>
        </aside>
      </div>

      <aside className="flex m-btn">
        <button className="arrow"></button>
        <span className="border__white"></span>
      </aside>

      <span className="strawberry__1"></span>
      <span className="strawberry__2"></span>
      <span className="strawberry__3"></span>
      <span className="strawberry__4"></span>
    </section>
  );
}; 

export { WelcomeVita };
