import React, {  useState } from "react";
import {  useNavigate } from "react-router-dom";
import "./LoginPage.css";
import Swal from 'sweetalert2';

function LoginPage() {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [,setUserId] = useState("");


  const handleClick = async () => {
    try {
      const response = await fetch("http://loans.iaomar.me/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: login,
          password: password,
        }),
      });
  
      if (response.ok) {
        const { data } = await response.json();
        localStorage.setItem("userId", data.id);
        console.log(localStorage.getItem("userId"));
  
        setUserId(data.id);
        navigate('/credits-page');
      } else {
        console.error("Invalid email or password:", response.status);
        Swal.fire({
          icon: 'error',
          title: 'Ошибка аутентификации',
          text: 'Неверный логин или пароль',
        });
      }
    } catch (error) {
      console.error("Failed to sign-in:", error);
      Swal.fire({
        icon: 'error',
        title: 'Ошибка',
        text: 'Произошла ошибка при попытке входа',
      });
    }
  };

  const handleLoginChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };

  return (
    <div className="maincontainer">
      <div>
        <p>Вход в систему</p>
        <span>
          Пожалуйста, введите ваш логин и пароль <br />
          ниже, чтобы войти в ваш аккаунт.
        </span>
      </div>
      <div className="formcontainer">
        <form>
          <label className="label required">Логин</label>
          <input
            name="name"
            type="text"
            className="input-login"
            placeholder="ivanovivan@mail.com"
            required
            value={login}
            onChange={handleLoginChange}
          />

          <label className="label required">Пароль</label>
          <input
            name="password"
            type="password"
            className="input-password"
            placeholder="*********"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="button" className="submit-button" onClick={handleClick}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export { LoginPage };
