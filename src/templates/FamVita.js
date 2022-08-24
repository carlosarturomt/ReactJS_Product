import React from "react";
import VitaGriego from "../assets/imgs/vitalinea-griego.png";
import VitaSazucar from "../assets/imgs/vitalinea-sin-azucar.png";
import VitaBebible from "../assets/imgs/vitalinea-bebible.png";

const FamVita = () => {

  window.addEventListener('scroll', function(){
    let animation = this.document.getElementById('aniStrawberry1');
    let positionObjt1 = animation.getBoundingClientRect().top;
    let sizeScreen = window.innerHeight/5;

    if(positionObjt1 < sizeScreen) {
      animation.style.animation = 'skew 1s ease-out';
    }
  })

  return (
    <section className="family__vita">
      <article>
        <hgroup>
          <h2>LA FAMILIA VITALÍNEA</h2>
        </hgroup>

        <section class="family__vita--slider">
          <picture class="family__vita--card">
            <img src={VitaGriego} alt="Vitalinea Griego" className="w-100" />
            <h3>Vitalínea Griego</h3>
          </picture>

          <picture class="family__vita--card">
            <img src={VitaSazucar} alt="Vitalínea sin Azúcar" className="w-70" />
            <h3>Vitalínea sin Azúcar</h3>
          </picture>

          <picture class="family__vita--card">
            <img src={VitaBebible} alt="Vitalínea Bebible" className="w-90" />
            <h3>Vitalínea Bebible</h3>
          </picture>
        </section>
      </article>

      <span className="strawberry__8" ></span>
      <span className="strawberry__9" id="aniStrawberry1"></span>
    </section>
  );
};

export { FamVita };
