import "./WelcomePage.css";
import bannerurl from "../assets/banner.png";
import { useNavigate } from "react-router-dom";
function WelcomePage() {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/form-filling-page");
  }
  return (
    <div className="container">
      <div className="container-text">
        <p className="text">
          Добро пожаловать в сервис "Турбо заем"
        </p>
        <p className="welcome-text">
          Вам нужен небольшой заем для покрытия неожиданных расходов или крупная
          сумма для реализации ваших планов,мы готовы помочь. наш процесс
          одобрения займа моментальный, быстрее оставьте заявку и ждите отклика
          от нас
        </p>
        <button onClick={handleLoginClick}>Оставить заяку</button>
      </div>
      <img src={bannerurl} alt="картинка " />
    </div>
  );
}

export { WelcomePage };
