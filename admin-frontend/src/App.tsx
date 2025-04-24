import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import BooksLayout from "./layouts/BooksLayout.tsx";
import Books from "./pages/Books.tsx";
import StockLayout from "./layouts/StockLayout.tsx";
import Stock from "./pages/Stock.tsx";
import OrdersLayout from "./layouts/OrdersLayout.tsx";
import Orders from "./pages/Orders.tsx";
import SalesLayout from "./layouts/SalesLayout.tsx";
import Sales from "./pages/Sales.tsx";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />
        }
      ]
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />
        }
      ]
    },
    {
      path: "/books",
      element: <BooksLayout />,
      children: [
        {
          index: true,
          element: <Books />
        }
      ]
    },
    {
      path: "/stock",
      element: <StockLayout />,
      children: [
        {
          index: true,
          element: <Stock />
        }
      ]
    },
    {
      path: "/orders",
      element: <OrdersLayout />,
      children: [
        {
          index: true,
          element: <Orders />
        }
      ]
    },
    {
      path: "/sales",
      element: <SalesLayout />,
      children: [
        {
          index: true,
          element: <Sales />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
