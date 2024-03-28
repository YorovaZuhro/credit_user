import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate(); 
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async () => {
    try {
      const response = await fetch('http://loans.iaomar.me/auth/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: login,
          password: password
        })
      });

      if (response.ok) {
        navigate('/request-page'); 
      } else {
        console.error('Invalid email or password:', response.status);
      }
    } catch (error) {
      console.error('Failed to sign-in:', error);
    }
  };

  const handleLoginChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };

  return (
    <div className="maincontainer">
      <div>
        <p>Вход в систему</p>
        <span>
          Пожалуйста, введите ваш логин и пароль <br />ниже, чтобы войти в ваш аккаунт.
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
            value={login} 
            onChange={handleLoginChange} 
          />

          <label className="label required">Пароль</label>
          <input
            name="password"
            type="password"
            className="input2"
            placeholder="*********"
            required
            value={password} 
            onChange={handlePasswordChange} 
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
