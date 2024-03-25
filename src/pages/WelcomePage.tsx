import "./WelcomePage.css";
import bannerurl from "../assets/banner.png";
import { useNavigate } from "react-router-dom";
function WelcomePage() {
  let navigate = useNavigate();

  function handleLoginClick() {
    navigate("/form-filling-page");
  }
  return (
    <div className="container">
      <div className="container2">
        <p>
          Добро пожаловать в <br></br>сервис "Турбо заем"
        </p>
        <span>
          Вам нужен небольшой заем для покрытия неожиданных расходов или крупная
          сумма для реализации ваших планов,мы готовы помочь. наш процесс
          одобрения займа моментальный, быстрее оставьте заявку и ждите отклика
          от нас
        </span>
        <button onClick={handleLoginClick}>Оставить заяку</button>
      </div>
      <img src={bannerurl} alt="картинка " />
    </div>
  );
}

export { WelcomePage };
