import "../styles/components/informationcontainer.sass";

import { AiOutlineWhatsApp, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiOutlineWhatsApp id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(14) 99618-5063</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>diegoschweter@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Bauru / SP</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
