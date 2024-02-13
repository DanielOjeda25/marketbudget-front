import { Typography } from 'keep-react';
import { useLocation } from 'react-router-dom';

const CustomFooter = () => {
  const location = useLocation();
  const proyectoLink = "/proyecto";
  const aboutUsLink = "/sobrenosotros";
  const loginLink = "/login";
  const ayudaLink = "/ayuda";
  const terminosLink = "/terminos";
  const politicasLink = "/politicas";

  return (
    <footer className="bg-gray-100 text-slate-900 p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-center mb-4 ">
        <div className="mb-4 md:mb-0">
          <img src="/vite.svg" alt="Logo" className="h-8 md:h-10" />
        </div>
        <div className="ml-0 md:ml-4 mt-4 md:mt-0 md:flex md:items-center">
          <a className="text-gray-500 hover:text-gray-900 block md:inline-block mr-4">
            Posadas, Misiones Argentina, 3300
          </a>
          <a href={aboutUsLink} className="text-gray-500 hover:text-gray-900 block md:inline-block mr-4">
            Sobre Nosotros
          </a>
          {location.pathname !== "/login" || location.pathname !== "/home" && (
            <a href={loginLink} className="text-gray-500 hover:text-gray-900block md:inline-block mr-4">
              Iniciar Sesión
            </a>
          )}
          <div className="flex flex-col">
            <a href={ayudaLink} className="text-gray-500 hover:text-gray-900 block md:inline-block mr-4">
              Ayuda
            </a>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Typography variant="p" className='w-full text-sm'>© 2024 Tu Empresa. Todos los derechos reservados.</Typography>
      </div>
    </footer>
  );
};

export default CustomFooter;
