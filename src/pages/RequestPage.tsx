import React, { useEffect, useState } from "react";
import { request, approve } from "../types/types"; 
import "./RequestPage.css";

function RequestPage() {
  const [requests, setRequests] = useState<request[]>([]);
  const [moreInfoOpened, setMoreInfoOpened] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const [requestId, setRequestId] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      fetchCreditRequests(userId);
    }
  }, []);

  async function fetchCreditRequests(userId: string): Promise<void> {
    try {
      const response = await fetch(`http://loans.iaomar.me/requests/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      setRequests(json.data);
    } catch (error) {
      console.error("Error fetching credit requests:", error);
    }
  }

  async function ApproveCredit(id: string): Promise<void> {
    try {
      const response = await fetch(`http://loans.iaomar.me/requests/${id}/approve`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: "user", 
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      alert("Request approved successfully");
      await fetchCreditRequests(localStorage.getItem("userId") || "");
    } catch (error) {
      console.error("Error approving credit request:", error);
    }
  }

  async function RejectCredit(id: string, reason: string): Promise<void> {
    try {
      const response = await fetch(`http://loans.iaomar.me/requests/${id}/reject`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer admin", 
        },
        body: JSON.stringify({ rejectionReason: reason }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      alert("Request rejected successfully");
      await fetchCreditRequests(localStorage.getItem("userId") || "");
    } catch (error) {
      console.error("Error rejecting credit request:", error);
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${day}.${month}.${year}`;
  };
  return (
    <div className="request-page">
      <span className="request-span">Заявки</span>
      <table className="request-table">
        <thead className="request-thead">
          <tr>
            <th>Сумма</th>
            <th>Валюта</th>
            <th>Дата</th>
            <th>Срок</th>
            <th>Статус</th>

          </tr>
        </thead>
        <tbody>
          {requests.map((credit) => (
            <tr key={credit.id}>
              <td>{credit.amount}</td>
              <td>{credit.currency}</td>
              <td>{formatDate(credit.updatedAt)}</td>
              <td>
                {typeof credit.term === "number" ? `${credit.term} мес.` : "N/A"}
              </td>
              <td>
                {credit.status === "APPROVED"
                  ? "Одобрен"
                  : credit.status === "PENDING"
                  ? "Ожидание"
                  : credit.status === "REJECTED"
                  ? "Отклонён"
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export  {RequestPage};


 

