/* eslint-disable react/prop-types */
import CustomFooter from './components/Footer/Footer';
import NavbarComponent from './components/Navbar/navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent />
      <div className="flex-grow container mx-auto p-4">
        {/* Agrega cualquier otro contenido que quieras dentro del layout */}
        {children}
      </div>
      <CustomFooter /> {/* Agrega tu componente de Footer aquí */}
    </div>
  );
}

export default Layout;
