import "./MainLoyout.css";
import { Outlet } from "react-router-dom";

function MainLoyout() {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

export default MainLoyout;
