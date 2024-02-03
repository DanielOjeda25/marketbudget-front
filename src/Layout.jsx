import React from 'react'
import NavbarComponent from './components/Navbar/navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarComponent />
      <div className="container mx-auto p-4">
        {/* Agrega cualquier otro contenido que quieras dentro del layout */}
        {children}
      </div>
    </div>
  )
}

export default Layout