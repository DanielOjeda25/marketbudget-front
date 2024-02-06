/* eslint-disable react/prop-types */
import CustomFooter from './components/Footer/Footer';
import NavbarCustomer from './components/Navbar/NavbarCustomer';

const LayoutCustomer = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarCustomer />
      <div className="flex-grow container mx-auto p-4">
        {/* Agrega cualquier otro contenido que quieras dentro del layout */}
        {children}
      </div>
      <CustomFooter /> {/* Agrega tu componente de Footer aquí */}
    </div>
  );
}

export default LayoutCustomer;
