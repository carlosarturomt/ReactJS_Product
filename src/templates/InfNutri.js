import React from "react";

const InfNutri = () => {

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
          <table>
            <thead>
              <tr>
                <th scope="col" className="table__left">
                  Contenido energético kJ/kcal
                </th>
                <th scope="col" className="table__right">
                  413,2/97,9
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="table__left">
                  Proteínas (g)
                </th>
                <th scope="row" className="table__right">
                  5.3
                </th>
              </tr>

              <tr>
                <th scope="row" className="table__left">
                  Grasas (lípidos) (g)
                </th>
                <th scope="row" className="table__right">
                  2.1
                </th>
              </tr>
              <tr>
                <th scope="row" className="table__left">
                  Grasas saturadas (g)
                </th>
                <th scope="row" className="table__right">
                  1.4
                </th>
              </tr>
              <tr>
                <th scope="row" className="table__left">
                  Carbohidratos (Hidratos de carbono) (g)
                </th>
                <th scope="row" className="table__right">
                  12.4
                </th>
              </tr>
              <tr>
                <th scope="row" className="table__left">
                  Azúcares (g)
                </th>
                <th scope="row" className="table__right">
                  7.7
                </th>
              </tr>
              <tr>
                <th scope="row" className="table__left">
                  Azúcares añadidos (g){" "}
                </th>
                <th scope="row" className="table__right">
                  0.1
                </th>
              </tr>
              <tr>
                <th scope="row" className="table__left">
                  Fibra dietética (g)
                </th>
                <th scope="row" className="table__right">
                  0.0
                </th>
              </tr>
              <tr>
                <th scope="row" className="table__left">
                  C Sodio (mg)
                </th>
                <th scope="row" className="table__right">
                  92.7
                </th>
              </tr>
              <tr>
                <th scope="row" className="table__left">
                  Calcio (mg)
                </th>
                <th scope="row" className="table__right">
                  199.6
                </th>
              </tr>
              <tr>
                <th scope="row" className="table__left">
                  %VNR*
                </th>
                <th scope="row" className="table__right">
                  22
                </th>
              </tr>
            </tbody>
          </table>
        </article>
      </div>

      <span className="strawberry__5" ></span>
      <span className="strawberry__6" id="aniStrawberry"></span>
      <span className="strawberry__7"></span>
    </section>
  );
};

export { InfNutri };
