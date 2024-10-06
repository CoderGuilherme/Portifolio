import React, { useState } from 'react';

// Componente para o campo de entrada
const FormInput = ({ label, type, name, value, onChange }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="form-control"
    />
  </div>
);

// Componente para o campo de texto (textarea)
const FormTextArea = ({ label, name, value, onChange }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="form-control"
      rows="4"
    />
  </div>
);

// Componente para o botão de envio
const SubmitButton = ({ label }) => (
  <button type="submit" className="btn btn-primary">
    {label}
  </button>
);

// Componente principal de formulário de contato
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Aqui você pode integrar com um backend ou serviço de e-mail.
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormInput
        label="Subject"
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
      />
      <FormTextArea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <SubmitButton label="Send Message" />
    </form>
  );
};

// Página de contato
const ContactPage = () => (
  <div className="container">
    <h1>Contact Us</h1>
    <ContactForm />
  </div>
);

export default ContactPage;
