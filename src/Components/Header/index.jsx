import React, { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center p-4">
        {/* Navegação em Desktop, centralizada abaixo do logotipo em telas menores */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className="text-brandText text-[20px] hover:text-brandPrimary"
          >
            Home
          </NavLink>
          <NavLink
            to="/sobre"
            className="text-brandText text-[20px] hover:text-brandPrimary"
          >
            Sobre mim
          </NavLink>
          <NavLink
            to="/contato"
            className="text-brandText text-[20px] hover:text-brandPrimary"
          >
            Contato
          </NavLink>
        </nav>

        {/* Botão para abrir/fechar o menu mobile */}
        <button
          className="md:hidden block focus:outline-none ml-auto"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <IoMdClose size={"24px"} /> : <IoMdMenu size={"24px"} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className="fixed left-0 right-0 md:hidden bg-brandPrimary text-white p-4 space-y-4">
          <NavLink to="/" className="block" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/sobre" className="block" onClick={toggleMenu}>
            Sobre mim
          </NavLink>
          <NavLink to="/contato" className="block" onClick={toggleMenu}>
            Contato
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
