import Header from "../Header/Header";
import "../../index.css";
import "./MainLoyout.css";
import { Outlet } from "react-router-dom";

function MainLoyout() {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLoyout;
