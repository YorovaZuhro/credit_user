import { useState } from "react";
import "./FormFillingPage.css";

function FormFillingPage() {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    currency: '',
    term: '',
  });

 
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); 
    const { name, email, amount, currency, term } = formData;

    try {
      const response = await fetch('http://loans.iaomar.me/requests/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          amount: Number(amount),
          currency: currency,
          term: Number(term)
        })
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        // Здесь можно обработать результат, например, очистить форму или показать сообщение об успехе
      } else {
        console.error('Server responded with error:', response.status);
      }
    } catch (error) {
      console.error('Failed to send form data:', error);
    }
  };

  return (
    <div className="main_container">
      <div>
        <p className="text">Заполните форму</p>
        <p  className="text1">
          Мы готовы помочь вам получить необходимый<br></br> заем быстро и
          легко. Пожалуйста, заполните<br></br> все обязательные поля
        </p>
      </div>
      <div className="form-container">
        <div className="form-title">Заполните форму</div>
        <form onSubmit={handleSubmit}>
          <label className="label required">ФИО</label>
          <input
            name="name"
            type="text"
            className="form-field"
            placeholder="Иванов Иван Иванович"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label className="label required">Email</label>
          <input
            name="email"
            type="email"
            className="form-field"
            placeholder="ivanovivan@mail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="form-row">
            <div className="input-group">
              <label className="label required">Сумма</label>
              <input
                name="amount"
                type="number"
                className="form-field1"
                placeholder="Введите сумму"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label className="label required">Валюта</label>
              <input
                name="currency"
                className="form-field2"
                placeholder="TJS"
                value={formData.currency}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <label className="label required">Срок (мес.)</label>
          <input
            name="term"
            type="number"
            className="form-field3"
            placeholder="12"
            value={formData.term}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-button">
            Оставить заявку
          </button>
        </form>
      </div>
    </div>
  );
}

export { FormFillingPage };
