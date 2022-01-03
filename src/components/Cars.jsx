import React from "react";
import CarStyle from "../theme/Cars.module.css";

const Cars = () => {
  return (
    <div className={CarStyle.cars}>
      <div className={CarStyle.carsTxt}>
        <a href="https://mawer.otomoto.pl/" target="_blank">
          Strona OtoMoto
        </a>
      </div>
    </div>
  );
};

export default Cars;
