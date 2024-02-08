import { Navbar } from "keep-react";
import { useLocation } from "react-router-dom";

const NavbarComponent = () => {
  const location = useLocation();
  return (
    <Navbar fluid={true} className="bg-slate-100 shadow-md ">
      <Navbar.Container className="flex items-center justify-between ">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8 "
        >
          <Navbar.Link linkName="Inicio" className="" href="/" />
          <Navbar.Link linkName="Ayuda" href="/ayuda" />
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
            <Navbar.Link linkName="Inicio" href="/" />
            <Navbar.Link linkName="Ayuda" href="/ayuda" />
            <Navbar.Link linkName="Sobre Nosotros" href="/sobrenosotros" />
            {location.pathname !== "/login" && (
              <a href="/login" className="px-4 py-2 bg-blue-600 rounded-full text-white hover:text-blue-600 hover:bg-slate-100">Iniciar Sesión</a>
            )}
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-5"
          >
            <Navbar.Link linkName="Sobre Nosotros" href="/sobrenosotros" />
            {location.pathname !== "/login" && (
              <a href="/login" className="px-4 py-2 bg-blue-600 rounded-full text-white hover:text-blue-600 hover:bg-slate-100">Iniciar Sesión</a>
            )}
          </Navbar.Container>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}

export default NavbarComponent;
