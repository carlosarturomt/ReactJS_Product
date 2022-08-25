import React from "react";
import { CardImg } from "./CardImg";
import VitaGriego from "../../assets/imgs/vitalinea-griego.png";
import VitaSazucar from "../../assets/imgs/vitalinea-sin-azucar.png";
import VitaBebible from "../../assets/imgs/vitalinea-bebible.png";

const Products = () => {

  window.addEventListener('scroll', function(){
    let animation = this.document.getElementById('aniStrawberry1');
    let positionObjt1 = animation.getBoundingClientRect().top;
    let sizeScreen = window.innerHeight/5;

    if(positionObjt1 < sizeScreen) {
      animation.style.animation = 'skew 1s ease-out';
    }
  });

  return (
    <section className="family__vita">
      <article>
        <hgroup>
          <h2>LA FAMILIA VITALÍNEA</h2>
        </hgroup>

        <section className="family__vita--slider">
          <CardImg source={VitaGriego} product="Vitalínea Griego" class_name="w-100" />
          <CardImg source={VitaSazucar} product="Vitalínea sin Azúcar" class_name="w-70" />
          <CardImg source={VitaBebible} product="Vitalínea Bebible" class_name="w-90" />
        </section>
      </article>
      <span className="strawberry__8" ></span>
      <span className="strawberry__9" id="aniStrawberry1"></span>
    </section>
  );
};

export { Products };
