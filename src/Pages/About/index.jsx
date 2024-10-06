import React from "react";
import { colors } from "../../utils/colors";
import Typography from "../../Components/Typograph";
import { FaUser, FaCode, FaProjectDiagram, FaLeaf, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <Typography
        variant="h1"
        color={colors.brandPrimary}
        align="center"
        addClassName="mb-8"
      >
        Sobre Mim
      </Typography>

      {/* Seção "Quem sou eu?" */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <FaUser size={30} color={colors.brandSecondary} className="mr-2" />
          <Typography
            variant="h2"
            color={colors.brandTertirary}
            align="left"
            addClassName="mb-4"
          >
            Quem sou eu?
          </Typography>
        </div>
        <Typography variant="p" color={colors.brandText} align="left">
          Meu nome é Guilherme Oliveira, e sou um Analista de Dados apaixonado
          por tecnologia e inovação. Tenho experiência em desenvolvimento de
          software, análise de dados e soluções para automação.
        </Typography>
      </section>

      {/* Seção "Minhas Habilidades" */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <FaCode size={30} color={colors.brandSecondary} className="mr-2" />
          <Typography
            variant="h2"
            color={colors.brandTertirary}
            align="left"
            addClassName="mb-4"
          >
            Minhas Habilidades
          </Typography>
        </div>
        <ul className="list-disc ml-5 text-lg leading-relaxed">
          <Typography variant="p" color={colors.brandText} align="left">
            <li>Desenvolvimento de Aplicações Web</li>
          </Typography>
          <Typography variant="p" color={colors.brandText} align="left">
            <li>React, JavaScript, HTML e CSS</li>
          </Typography>
          <Typography variant="p" color={colors.brandText} align="left">
            <li>Data Science com Python</li>
          </Typography>
          <Typography variant="p" color={colors.brandText} align="left">
            <li>SQL, Power BI, e Análise de Dados</li>
          </Typography>
          <Typography variant="p" color={colors.brandText} align="left">
            <li>Automação com Power Automate e Power Apps</li>
          </Typography>
        </ul>
      </section>

      {/* Seção "Projetos Recentes" */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <FaProjectDiagram
            size={30}
            color={colors.brandSecondary}
            className="mr-2"
          />
          <Typography
            variant="h2"
            color={colors.brandTertirary}
            align="left"
            addClassName="mb-4"
          >
            Projetos Recentes
          </Typography>
        </div>
        <Typography variant="p" color={colors.brandText} align="left">
          Recentemente, desenvolvi o projeto SeaSense, um dashboard que
          monitora a qualidade da água utilizando dados coletados por
          dispositivos IoT em embarcações.
        </Typography>
      </section>

      {/* Seção "Interesses" */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <FaLeaf size={30} color={colors.brandSecondary} className="mr-2" />
          <Typography
            variant="h2"
            color={colors.brandTertirary}
            align="left"
            addClassName="mb-4"
          >
            Interesses
          </Typography>
        </div>
        <Typography variant="p" color={colors.brandText} align="left">
          Além de desenvolvimento de software, sou entusiasta de tecnologias
          sustentáveis e economia circular. Gosto de aplicar conceitos como
          lixo zero e sustentabilidade em meus projetos sempre que possível.
        </Typography>
      </section>

      {/* Seção "Contato" */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <FaEnvelope size={30} color={colors.brandSecondary} className="mr-2" />
          <Typography
            variant="h2"
            color={colors.brandTertirary}
            align="left"
            addClassName="mb-4"
          >
            Contato
          </Typography>
        </div>
        <Typography variant="p" color={colors.brandText} align="left">
          Se você deseja entrar em contato, sinta-se à vontade para visitar a
          página de contato ou me enviar um e-mail diretamente.
        </Typography>
      </section>
    </div>
  );
};

export default About;