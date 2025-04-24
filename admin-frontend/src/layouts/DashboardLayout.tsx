import { Outlet } from "react-router-dom";
import NavBar from "../componenets/navbar/NavBar.tsx";

function DashboardLayout() {
  const navList = ["books", "stock", "orders", "sales"]
  return (
    <>
      <NavBar navList={ navList } />
      <Outlet />
    </>
  );
}

export default DashboardLayout;