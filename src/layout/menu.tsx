import "./menu.css";
import { Link, useLocation } from "react-router-dom";
function Menu() {
  const location = useLocation();

  return (
    <div>
      <ul>
        <li>
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
        </li>
      </ul>
    </div>
  );
}

export { Menu };
