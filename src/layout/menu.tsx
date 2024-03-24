import { Link } from "react-router-dom";
function Menu() {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          marginTop: "20px",
          listStyle: "none",
          // backgroundColor : "rgb(186, 153, 133)",
        }}
      >
        {/* <li>
          <Link to="/">Welcome page</Link>
        </li>
        <li>
          <Link to="/credit-payment-modul"> CreditPaymentModul </Link>
        </li>
        <li>
          <Link to="/credits-page">CreditsPage</Link>
        </li>
        <li>
          <Link to="/form-filling-page">FormFillingPage</Link>
        </li>
        <li>
          <Link to="/login-page">LoginPage</Link>
        </li>
        <li>
          <Link to="/request-page">RequestPage</Link>
        </li> */}
      </ul>
    </div>
  );
}

export { Menu };
