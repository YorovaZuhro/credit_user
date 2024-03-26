import "./menu.css";
import { Link, useLocation } from "react-router-dom";

function Menu() {
  const location = useLocation();
  const linkStyle1 = (path:string) => ({
    color: location.pathname === path ? "#FCA713" : "#0A0A0A",
  });

  function linkStyle(path: string) {
    return {
      color: location.pathname === path ? "#007bff" : "#ffffff",
      textDecoration: "none",
    };
  }

  return (
    <div>
      <ul className="indent">
        {location.pathname === "/form-filling-page" && (
          <button className="menu">
          <Link
            to="/login-page"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            войти
          </Link>
        </button>
        )}
      </ul>
      {location.pathname === "/request-page" && (
        <ul className="indent1">
          <li className="indent">
            <Link to="/request-page" style={linkStyle1("/request-page")}>
              Мои заявки
            </Link>
          </li>
          <li className="indent">
            <Link to="/credits-page" style={linkStyle1("/credits-page")}>
              Мои кредиты
            </Link>
          </li>
        </ul>
      )}
        {location.pathname === "/credits-page" && (
        <ul className="indent1">
          <li className="indent">
            <Link to="/request-page" style={linkStyle1("/request-page")}>
              Мои заявки
            </Link>
          </li>
          <li className="indent">
            <Link to="/credits-page" style={linkStyle1("/credits-page")}>
              Мои кредиты
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export { Menu };
