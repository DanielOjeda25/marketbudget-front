import { useState } from 'react';
import { Button, Label, TextInput, Typography } from 'keep-react';
import Layout from '../Layout';
import { Envelope, EyeSlash, } from '@phosphor-icons/react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout>
      <section className='flex justify-center items-center h-screen w-full'>
        <div className='w-full max-w-md p-8 bg-white rounded-md shadow-md '>
          <Typography variant="heading-6" className='text-center font-semibold mb-6'>Iniciar Sesión</Typography>
          <form action="" method="get">
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

            <div className="flex items-center justify-between my-5">
              <Button size="md" type="outlinePrimary">Iniciar Sesión</Button>
              <a href="#" className="text-gray-600 hover:underline">Olvidaste tu contraseña?</a>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default Login;
