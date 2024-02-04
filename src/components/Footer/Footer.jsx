import { Typography } from 'keep-react';

const CustomFooter = () => {
  const inicioLink = "/";
  const proyectoLink = "/proyecto";
  const aboutUsLink = "/about-us";
  const loginLink = "/login";

  return (
    <footer className="bg-gray-800 text-white p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-center mb-4">
        <div className="mb-4 md:mb-0">
          {/* Agrega tu logo aquí */}
          <img src="/vite.svg" alt="Logo" className="h-8 md:h-10" />
        </div>
        <div className="ml-0 md:ml-4 mt-4 md:mt-0 md:flex md:items-center">
          <a href={inicioLink} className="text-gray-300 hover:text-gray-500 block md:inline-block mr-4">
            Inicio
          </a>
          <a href={proyectoLink} className="text-gray-300 hover:text-gray-500 block md:inline-block mr-4">
            Proyecto
          </a>
          <a href={aboutUsLink} className="text-gray-300 hover:text-gray-500 block md:inline-block mr-4">
            About Us
          </a>
          {location.pathname !== "/login" && (
            <a href={loginLink} className="text-gray-300 hover:text-gray-500 block md:inline-block">
              Iniciar Sesión
            </a>
          )}
        </div>
      </div>

      <div className="text-center  ">
        <Typography variant="caption" className='w-full text-sm'>© 2024 Tu Empresa. Todos los derechos reservados.</Typography>
      </div>
    </footer>
  );
};

export default CustomFooter;
