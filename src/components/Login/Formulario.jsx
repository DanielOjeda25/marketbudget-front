import { EyeSlash, Envelope } from '@phosphor-icons/react';
import { Button, Label, TextInput } from 'keep-react';
import { useState } from 'react';

const Formulario = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="max-w-md mx-auto">
      <div className='mb-4'>
        <Label htmlFor="id-9" value="Correo" />
        <TextInput
          id="id-9"
          placeholder="example@gmail.com"
          color="gray"
          sizing="md"
          addon={<Envelope size={20} color="#5E718D" />}
          addonPosition="left"
        />
      </div>

      <div className='mb-4'>
        <Label htmlFor="id-10" value="Contraseña" />
        <TextInput
          id="id-10"
          placeholder="********"
          color="gray"
          sizing="md"
          type={showPassword ? 'text' : 'password'}
          addon={<EyeSlash size={20} color="#5E718D" className='cursor-pointer' onClick={toggleShowPassword} />}
          addonPosition="left"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between my-5">
        <Button size="md" type="outlinePrimary" className="mb-4 md:mb-0 md:mr-4">
          Iniciar Sesión
        </Button>
        <a href="#" className="text-gray-600 hover:underline text-center md:text-left">
          Olvidaste tu contraseña?
        </a>
      </div>
    </form>
  );
};

export default Formulario;
