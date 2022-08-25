import React from "react";
import { Table } from "./Table";

const About = () => {

  window.addEventListener('scroll', function(){
    let animation = this.document.getElementById('aniStrawberry');
    let positionObjt1 = animation.getBoundingClientRect().top;
    let sizeScreen = window.innerHeight/5;

    if(positionObjt1 < sizeScreen) {
      animation.style.animation = 'translate 1s ease-out';
    }
  })
  
  return (
    <section className="info flex-start">
      <hgroup>
        <h2>Información nutrimental</h2>
      </hgroup>

      <div className="flex">
        <article className="info__left">
          <hgroup>
            <p>Vitalínea® Bebible Guayaba 217gr</p>
            <p>Valor promedio por porción de 217gr</p>
            <p>Porciones por envase: 1</p>
          </hgroup>
          <hgroup>
            <p>Ingredientes:</p>
          </hgroup>
          <p>
            Leche descremada pasteurizada y/o reconstituida pasteurizada de
            vaca. 3.5% preparado de fruta guayaba (acesulfame K y sucralosa
            (27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos
            lácticos.
          </p>
        </article>

        <article className="info__right flex--jc">
          < Table />
        </article>
      </div>

      <span className="strawberry__5" ></span>
      <span className="strawberry__6" id="aniStrawberry"></span>
      <span className="strawberry__7"></span>
    </section>
  );
};

export { About };
