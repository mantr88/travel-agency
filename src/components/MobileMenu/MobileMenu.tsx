import { NavLink } from "react-router-dom";
import "./MobileMenu.css";
import Heart from "../../ui/svgElements/Heart";
import User from "../../ui/svgElements/User";

function MobileMenu() {
  return (
    <div className="menu-container">
      <nav className="menu-navigation">
        <ul className="menu-list">
          <li>
            <NavLink className="menu-link" to="/travel-agensy/">
              Головна
            </NavLink>
          </li>
          <li>
            <NavLink className="menu-link" to="#">
              Всі оголошення
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-link" to="#">
              Обране
              <div>
                <Heart />
              </div>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-link" to="#">
              Особистий кабінет
              <div>
                <User />
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;
