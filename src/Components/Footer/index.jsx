import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { colors } from "../../utils/colors";
import Typography from "../../Components/Typograph/index";

const Footer = () => {
  return (
    <footer className="">
      <div className="md:p-4 container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600">
        {/* Navegação */}
        <div className="flex space-x-4 mb-4 md:mb-0 flex-wrap  justify-center">
          <NavLink to="/" className="text-brandText hover:text-brandPrimary transition duration-300">
            Home
          </NavLink>
          <NavLink to="/sobre" className="text-brandText hover:text-brandPrimary transition duration-300">
            Sobre mim
          </NavLink>
          <NavLink to="/contato" className="text-brandText hover:text-brandPrimary transition duration-300">
            Contato
          </NavLink>
        </div>

        {/* Informações de Contato */}
        <div className="text-center mb-4 md:mb-0 sm:flex gap-4">
            <Typography variant="p" color={colors.brandText} align="left">
              Telefone: +55 11 91234-5678
            </Typography>
            <Typography variant="p" color={colors.brandText} align="left">
              Gmail: Guilhermesoliveira20@gmail.com
            </Typography>
        </div>

        {/* Redes Sociais */}
        <div className="flex space-x-4">
          <a href="https://github.com/CoderGuilherme" className=" hover:text-brandPrimary transition duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/data-science-guilherme-oliveira/" className=" hover:text-brandPrimary transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com" className=" hover:text-brandPrimary transition duration-300">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
