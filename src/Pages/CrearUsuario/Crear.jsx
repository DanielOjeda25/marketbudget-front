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
    password: '',
    numberPhone: '',
    cuit: '',
    fantasyName: '',
    address: {
      street: '',
      city: '',
      state: '',
      postalCode: '',
      country: ''
    }
  });

  const handleInputChangeComercio = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormDataComercio({
        ...formDataComercio,
        [parent]: {
          ...formDataComercio[parent],
          [child]: value
        }
      });
    } else {
      setFormDataComercio({
        ...formDataComercio,
        [name]: value
      });
    }
  };

  const handleSubmitComercio = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${crearUser}`, formDataComercio);
      if (response.status === 200) {
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
      <section className='w-full  p-4 flex justify-center items-center flex-col'>
        <h2 className='text-2xl text-center m-3'>Registro de Comercio</h2>
        <form onSubmit={handleSubmitComercio} className="p-5 bg-gray-100 rounded-lg shadow-md w-full max-w-2xl grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="businessName"
              required={true}
              placeholder="Nombre del negocio"
              value={formDataComercio.businessName}
              onChange={handleInputChangeComercio}
              className="block w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="email"
              required={true}
              placeholder="Correo electrónico"
              value={formDataComercio.email}
              onChange={handleInputChangeComercio}
              className="block w-full px-4 py-2 mt-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              name="password"
              required={true}
              placeholder="Contraseña"
              value={formDataComercio.password}
              onChange={handleInputChangeComercio}
              className="block w-full px-4 py-2 mt-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="numberPhone"
              required={true}
              placeholder="Número de teléfono"
              value={formDataComercio.numberPhone}
              onChange={handleInputChangeComercio}
              className="block w-full px-4 py-2 mt-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="cuit"
              placeholder="CUIT"
              required={true}
              value={formDataComercio.cuit}
              onChange={handleInputChangeComercio}
              className="block w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="fantasyName"
              required={true}
              placeholder="Nombre de fantasía"
              value={formDataComercio.fantasyName}
              onChange={handleInputChangeComercio}
              className="block w-full px-4 py-2 mt-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="address.street"
              required={true}
              placeholder="Calle"
              value={formDataComercio.address.street}
              onChange={handleInputChangeComercio}
              className="block w-full px-4 py-2 mt-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="address.city"
              required={true}
              placeholder="Ciudad"
              value={formDataComercio.address.city}
              onChange={handleInputChangeComercio}
              className="block w-full px-4 py-2 mt-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="address.state"
              required={true}
              placeholder="Estado"
              value={formDataComercio.address.state}
              onChange={handleInputChangeComercio}
              className="block w-full px-4 py-2 mt-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="address.postalCode"
              required={true}
              placeholder="Código Postal"
              value={formDataComercio.address.postalCode}
              onChange={handleInputChangeComercio}
              className="block w-full px-4 py-2 mt-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="address.country"
              required={true}
              placeholder="País"
              value={formDataComercio.address.country}
              onChange={handleInputChangeComercio}
              className="block w-full px-4 py-2 mt-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button type="submit" className="col-span-2 px-4 py-2 bg-blue-500 text-white rounded-full w-full hover:bg-blue-700">
            Enviar
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Crear;
