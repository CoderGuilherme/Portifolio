import React, { useState } from "react";
import Typography from "../../Components/Typograph/index";
import { colors } from "../../utils/colors";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import contactImage from "../../assets/contactImage.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row p-6 from-indigo-900 to-indigo-800 text-white rounded-lg shadow-lg">
      <div className="md:w-1/2 flex items-center justify-center p-4">
        <img src={contactImage} alt="Contato" className="w-full h-auto rounded-lg" />
      </div>

      <div className="md:w-1/2 p-4">
        <Typography
          variant="h2"
          color={colors.brandPrimary}
          align="center"
          addClassName="mb-8"
        >
          Entre em Contato!
        </Typography>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex justify-between space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="Nome"
              value={formData.firstName}
              onChange={handleChange}
              className="flex-1 p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Sobrenome"
              value={formData.lastName}
              onChange={handleChange}
              className="flex-1 p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
            />
          </div>

          <div className="flex justify-between space-x-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telefone"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
            />
          </div>

          <textarea
            name="message"
            placeholder="Mensagem"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="w-full p-2 rounded-md bg-brandPrimary text-white hover:bg-brandSecondary transition duration-300"
          >
            ENVIAR
          </button>
        </form>

        <div className="mt-8">
          <Typography
            variant="h3"
            color={colors.brandPrimary}
            align="left"
            addClassName="mb-4"
          >
            Informações de Contato
          </Typography>
          <Typography variant="p" color={colors.brandText} align="left">
            Telefone: +55 11 91234-5678
          </Typography>
          <Typography variant="p" color={colors.brandText} align="left">
            Gmail: Guilhermesoliveira20@gmail.com
          </Typography>
        </div>

        <div className="mt-6">
          <Typography
            variant="h3"
            color={colors.brandPrimary}
            align="left"
            addClassName="mb-4"
          >
            Me Siga
          </Typography>
          <div className="flex space-x-4">
            <a href="https://github.com/CoderGuilherme" className="text-brandText hover:text-brandPrimary transition duration-300">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-brandText hover:text-brandPrimary transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/data-science-guilherme-oliveira/" className="text-brandText hover:text-brandPrimary transition duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
