import { useEffect, useState } from "react";
import { CreditData, transaction } from "../types/types";
import "./CreditsPage.css";

function CreditsPage()
 {const [amount, setAmount] = useState<number | undefined>();
  const [moreInfoOpened, setMoreInfoOpened] = useState(false);
  const [credits, setCredits] = useState<CreditData[]>([]);
  const [creditId, setCreditId] = useState("");


  async function fetchCreditRequests(): Promise<CreditData | null> {
    try {
      const response = await fetch(`http://loans.iaomar.me/credits/`, {
        method: "GET",
        headers: {
          authorization: "user_" + localStorage.getItem("userId"),
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      setCredits(json.data);
      setCreditId(json.data.id);
      return json.data;
    } catch (error) {
      console.error("Error fetching credit requests:", error);
      return null;
    }
  }

  async function transactionsCredit(
    id: string,
    amount: number
  ): Promise<transaction | null> {
    try {
      const transactionsBody = { "amount" : amount };
      const response = await fetch(
        `http://loans.iaomar.me/credits/${id}/transactions`,
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(transactionsBody),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      await fetchCreditRequests();
      return json.data;
    } catch (error) {
      console.error("Error fetching credit requests:", error);
      return null;
    }
  }


  useEffect(() => {
    fetchCreditRequests();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${day}.${month}.${year}`;
  };

  return (
    <div className="credit-header">
      <span className="credit-span">Мои Кредиты</span>
      <table className="rcredit-table">
        <thead className="credit-thead">
          <tr>
            <th>Сумма</th>
            <th>Остаток</th>
            <th>Валюта</th>
            <th>Дата</th>
            <th>Срок</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {credits.map((credit) => (
            <tr key={credit.id}>
              <td>{credit.amount !== null ? credit.amount : "N/A"}</td>
              <td>
                {credit.balanceAmount !== null ? credit.balanceAmount : "N/A"}
              </td>
              <td>{credit.currency}</td>
              <td>{formatDate(credit.createdAt)}</td>
              <td>
                {typeof credit.term === "number"
                  ? `${credit.term} мес.`
                  : "N/A"}
              </td>{" "}
              <td>
                {credit.status === "ACTIVE"
                  ? "Активный"
                  : credit.status === "CLOSED"
                  ? "Погашен"
                  : "N/A"}
              </td>
              <td>
                <button
                  className="button"
                  onClick={() => {
                    setCreditId(credit.id);
                    setMoreInfoOpened(true);
                  }}
                >
                  Оплатить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {moreInfoOpened && (
        <>
          <div
            className="credit-modal-bg"
            onClick={() => setMoreInfoOpened(false)}
          ></div>
          <div className="credit-modal">
            <button
              className="credit-modal-close-button"
              onClick={() => setMoreInfoOpened(false)}
            >
            </button>
            <span className="credit-modal-title">Оплата по кредиту</span>
            <div className="block">
              <div className="credit-modal-body">
                <label className="credit-modal-label">
                  Сумма погашения<span style={{ color: "red" }}>*</span>
                </label>
               <input
                  className="credit-modal-input"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  placeholder="1200"
                /> 
              </div>
              <button
                className="credit-modal-button"
                onClick={() => {
                  if (amount !== undefined) {
                    transactionsCredit(creditId, amount);
                  } else {
                    console.error("Amount is undefined.");
                  }
                  setMoreInfoOpened(false);
                }}
              >
                Оплатить
              </button>
              <button
                className="credit-modal-cancel-button"
                onClick={() => setMoreInfoOpened(false)}
              >
                Отмена
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export { CreditsPage };
