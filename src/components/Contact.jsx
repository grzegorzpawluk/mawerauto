import React from "react";
import ContactStyle from "../theme/Contact.module.css";

const Contact = () => {
  return (
    <div className={ContactStyle.contact}>
      <div className={ContactStyle.contactTxt}>
        <p>
          MAWER Mateusz Baczkowski 56-300 Sułów ul. Żmigrodzka 14a tel.
          602115098 email: baczkowski.mateusz@wp.pl
        </p>
      </div>
    </div>
  );
};

export default Contact;
