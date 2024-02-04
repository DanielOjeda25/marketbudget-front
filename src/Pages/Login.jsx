import { Typography } from 'keep-react';
import Layout from '../Layout';
import Formulario from '../components/Login/Formulario';

const Login = () => {
  return (
    <Layout>
      <section className='flex justify-center items-center h-screen w-full'>
        <div className='w-full max-w-md p-8 bg-white rounded-md shadow-md '>
          <Typography variant="heading-6" className='text-center font-semibold mb-6'>Iniciar Sesión</Typography>
          <Formulario />
        </div>
      </section>
    </Layout>
  );
}

export default Login;
