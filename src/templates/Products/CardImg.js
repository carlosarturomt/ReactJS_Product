import React from "react";

const CardImg = ({source= "", product, class_name  }) => {
  return (
    <picture className="family__vita--card"> 
      <img src={source} alt={product} className={class_name}/>
      <h3>{product}</h3>
    </picture>
  );
};

export { CardImg };
