import "./menu";
import { Menu } from "./menu";
import "./header.css";
import logourl from "../assets/logo.png";
function Header() {
  return (
    <header className="menu1">
      <nav>
        <img src={logourl} alt="Логотип" />
        <Menu />
      </nav>
    </header>
  );
}

export { Header };
