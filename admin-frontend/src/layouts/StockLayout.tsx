import { Outlet } from "react-router-dom";
import NavBar from "../componenets/navbar/NavBar.tsx";

function StockLayout() {
  const navList = ["dashboard"]
  return (
    <>
      <NavBar navList={navList} />
      <Outlet />
    </>
  );
}

export default StockLayout;