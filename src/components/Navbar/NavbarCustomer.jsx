import { Navbar } from "keep-react";
import { useNavigate } from "react-router-dom";

const NavbarCustomer = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Elimina el token del localStorage
    localStorage.removeItem("token");
    // Redirige al inicio ("/")
    navigate("/");
  };

  return (
    <Navbar fluid={true} className="bg-slate-100 shadow-md">
      <Navbar.Container className="flex items-center justify-between ">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8 "
        >
          <Navbar.Link linkName="Inicio" className="" href="/home" />
          <Navbar.Link linkName="Productos" href="/productos" />
        </Navbar.Container>
        <Navbar.Brand>
          <img
            src="/vite.svg"
            alt="budget"
            width="40"
            height="40"
          />
        </Navbar.Brand>

        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Inicio" href="/home" />
            <Navbar.Link linkName="Productos" href="/productos" />
            <Navbar.Link linkName="Carrito" href="/carrito" />
            {/* Asigna handleLogout al evento onClick */}
            <a href="/login" className="px-4 py-2 bg-red-600 rounded-full text-white hover:text-red-600 hover:bg-slate-100" onClick={handleLogout}>Cerrar Sesión</a>
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-5"
          >
            <Navbar.Link linkName="Carrito" href="/carrito" />
            {/* Asigna handleLogout al evento onClick */}
            <a href="/login" className="px-4 py-2 bg-red-600 rounded-full text-white hover:text-red-600 hover:bg-slate-100" onClick={handleLogout}>Cerrar Sesión</a>
          </Navbar.Container>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}

export default NavbarCustomer;
