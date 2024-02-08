import { EyeSlash, Envelope } from '@phosphor-icons/react';
import { Button, Label, TextInput } from 'keep-react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword, toggleShowPassword, authenticateUser, selectAuth } from './Hooks/FormularioSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password, showPassword, user, token, status, error } = useSelector(selectAuth);

  const handleLogin = () => {
    dispatch(authenticateUser({ email, password }));
  };
  useEffect(() => {
    // Verifica si la autenticación ha tenido éxito
    if (status === 'succeeded' && token) {
      console.log('Usuario autenticado:', user);
      console.log('Token:', token);

      // Guardar el token en localStorage
      localStorage.setItem('token', token);

      // Redirigir al usuario a la página de inicio
      navigate('/home');
    }

    // Verifica si ha habido un error en la autenticación
    if (status === 'failed') {
      console.error('Error de autenticación:', error);
    }
  }, [status, user, token, error, navigate]);

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
          value={email}
          handleOnChange={(e) => dispatch(setEmail(e.target.value))}
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
          addon={<EyeSlash size={20} color="#5E718D" className='cursor-pointer' onClick={() => dispatch(toggleShowPassword())} />}
          addonPosition="left"
          value={password}
          handleOnChange={(e) => dispatch(setPassword(e.target.value))}
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between my-5">
        <Button size="md" type="outlinePrimary" className="mb-4 md:mb-0 md:mr-4" onClick={handleLogin}>
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
