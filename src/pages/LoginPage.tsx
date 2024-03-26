
import { useNavigate } from 'react-router-dom'; 
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/request-page'); 
  };

  return (
    <div className="maincontainer">
      <div>
        <p>Вход в систему</p>
        <span>
          Пожалуйста, введите ваш логин и пароль <br></br>ниже, чтобы войти в ваш аккаунт.
        </span>
      </div>
      <div className="formcontainer">
        <form>
          <label className="label required">Логин</label>
          <input
            name="name"
            type="text"
            className="input1"
            placeholder="ivanovivan@mail.com"
            required
          />

          <label className="label required">Пароль</label>
          <input
            name="password" 
            type="password" 
            className="input2"
            placeholder="*********"
            required
          />
          <button type="button" className="submitbutton" onClick={handleClick}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export { LoginPage };
