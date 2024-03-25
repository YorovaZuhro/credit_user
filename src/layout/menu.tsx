import "./menu.css";
import { Link, useLocation } from "react-router-dom";
function Menu() {
  const location = useLocation();

  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          marginTop: "20px",
          listStyle: "none",
        }}
      >
        <li>
          {location.pathname === "/form-filling-page" && (
            <button className="menu">
              <Link style={{color:"#ffffff"}}to="/login-page">войти</Link>
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}

export {Menu};