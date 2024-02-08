import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home/Home";
import HomeCustomer from "./Pages/Home/HomeCustomer";
import Ayuda from "./Pages/Ayuda";
import SobreNosotros from "./Pages/SobreNosotros";

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
  },
  {
    path: '/ayuda',
    element: <Ayuda />
  },
  {
    path: '/sobrenosotros',
    element: <SobreNosotros />
  }
])
export default router