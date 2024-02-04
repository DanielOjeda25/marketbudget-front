import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home/Home";
import HomeCustomer from "./Pages/Home/HomeCustomer";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/home',
    element: <HomeCustomer />
  },
  {
    path: '/login',
    element: <Login />
  }
])
export default router