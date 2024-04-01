import "./menu.css";
import { Link, useLocation } from "react-router-dom";

function Menu() {
  const location = useLocation();
  const linkStyle1 = (path:string) => ({
    color: location.pathname === path ? "#FCA713" : "#0A0A0A",
  });


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
        {location.pathname === "/credits-page" && (
        <ul className="indent1">
          <li className="indent">
            <Link to="/" style={linkStyle1("/credits-page")}>
              На главную
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export { Menu };
