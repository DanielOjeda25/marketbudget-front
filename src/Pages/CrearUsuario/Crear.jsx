import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../Layout';
import { crearUser } from '../../endpoints';
import { useNavigate } from 'react-router-dom';

const Crear = () => {
  const navigate = useNavigate();

  const [formDataComercio, setFormDataComercio] = useState({
    businessName: '',
    email: '',
    password: ''
  });

  const handleInputChangeComercio = (e) => {
    const { name, value } = e.target;
    setFormDataComercio({
      ...formDataComercio,
      [name]: value
    });
  };

  const handleSubmitComercio = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${crearUser}`, formDataComercio);
      console.log(response);
      if (response.status === 200 || response.status === 202) {
        navigate('/login');
        console.log('Usuario creado exitosamente:', response.data);
      }
    } catch (error) {
      console.error('Error al crear usuario:', error);
      console.log(formDataComercio);
    }
  };

  return (
    <Layout>
      <section className='w-full p-4 flex justify-center items-center flex-col'>
        <h2 className='text-2xl text-center m-3'>Registro de Comercio</h2>
        <form onSubmit={handleSubmitComercio} className="p-5 bg-gray-100 rounded-lg shadow-md w-full max-w-md">
          <input
            type="text"
            name="businessName"
            required={true}
            placeholder="Nombre del negocio"
            value={formDataComercio.businessName}
            onChange={handleInputChangeComercio}
            className="block w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
          />
          <input
            type="email"
            name="email"
            required={true}
            placeholder="Correo electrónico"
            value={formDataComercio.email}
            onChange={handleInputChangeComercio}
            className="block w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
          />
          <input
            type="password"
            name="password"
            required={true}
            placeholder="Contraseña"
            value={formDataComercio.password}
            onChange={handleInputChangeComercio}
            className="block w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
          />
          <button type="submit" className="w-full bg-blue-500 text-white rounded-full py-2 hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
            Registrarse
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Crear;
