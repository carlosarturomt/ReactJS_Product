import React from "react";

const Table = () => {
  return (
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
  );
};

export { Table };