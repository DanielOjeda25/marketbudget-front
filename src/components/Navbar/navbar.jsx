import { Navbar } from "keep-react";

const NavbarComponent = () => {
  return (
    <Navbar fluid={true} className="bg-slate-900 shadow-md">
      <Navbar.Container className="flex items-center justify-between ">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8 "
        >
          <Navbar.Link linkName="Inicio" className="" href="/" />
          <Navbar.Link linkName="Projecto" />
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
            <Navbar.Link linkName="Inicio" />
            <Navbar.Link linkName="Projecto" />
            <Navbar.Link linkName="About Us" />
            <Navbar.Link linkName="Iniciar Sesión" href="/login" />
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-5"
          >
            <Navbar.Link linkName="Sobre Nosotros" />
            <Navbar.Link linkName="Iniciar Sesión" href="/login" />
          </Navbar.Container>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}

export default NavbarComponent;
