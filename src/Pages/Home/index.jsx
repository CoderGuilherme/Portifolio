import React from "react";
import Typography from "../../Components/Typograph/index.jsx";
import { colors } from "../../utils/colors.js";
import { projects } from "../../data.js";
import ProjectCard from "../../Components/projectCard/index.jsx";
import Perfil from "../../assets/perfil.jpg"

// Importação correta dos ícones
import htmlIcon from "../../assets/htmlIcon.svg";
import cssIcon from "../../assets/cssIcon.svg";
import jsIcon from "../../assets/jsIcon.svg";
import reactIcon from "../../assets/reactIcon.svg";
import pythonIcon from "../../assets/python-icon.svg"
import sqlIcon from "../../assets/sqlicon.svg"
import pbiIcon from "../../assets/power-bi-icon.svg"
import excelIcon from "../../assets/excel-icon.svg"
import analyticsIcon from "../../assets/google-analytics-icon.svg"
import numpyIcon from "../../assets/numpy-icon.svg"
import pandasIcon from "../../assets/pandas-icon.svg"
import seabornIcon from "../../assets/seaborn-icon.svg"
import streamlitIcon from "../../assets/streamlit-icon.svg"
import matplotlibIcon from "../../assets/matplotlib-icon.svg"
import scikitlearnIcon from "../../assets/scikitlearn-icon.svg"
import plotlyIcon from "../../assets/plotly-icon.svg"
import fletIcon from "../../assets/flet-icon.svg"



function Home() {
  const techStackIcons = [
    { src: htmlIcon, alt: "HTML" },
    { src: cssIcon, alt: "CSS" },
    { src: jsIcon, alt: "JavaScript" },
    { src: reactIcon, alt: "React" },
    { src: pythonIcon, alt: "Python" },
    { src: sqlIcon, alt: "MySql" },
    { src: pbiIcon, alt: "Power Bi" },
    { src: excelIcon, alt: "Excel" },
    { src: analyticsIcon, alt: "Google analytics" },
  ];

  const LibsStackIcons = [
    { src: numpyIcon, alt: "Numpy" },
    { src:pandasIcon, alt: "Pandas" },
    { src:seabornIcon, alt: "Seaborn" },
    { src:matplotlibIcon, alt: "matplotlib" },
    { src:streamlitIcon, alt: "Streamlit" },
    { src:scikitlearnIcon, alt: "Scikitlearn" },
    { src:plotlyIcon, alt: "plotly" },
    { src:fletIcon, alt: "Flet" },

  ];

  return (
    <main className="container mx-auto gap-10 lg:gap-20 py-custom-v px-custom-h md:py-custom-v-md md:px-custom-h-md lg:py-custom-v-lg lg:px-custom-h-lg flex flex-col">
      <section className="flex flex-col-reverse md:flex-row items-center gap-6 justify-evenly">
        <div className="text-center md:text-left md:max-w-[50%]">
          <Typography variant="h1" color={colors.brandPrimary}>Guilherme Oliveira</Typography>
          <Typography variant="h2" color={colors.brandTertirary}>Analista de Dados</Typography>
        </div>

        <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-solid border-brandPrimary border-gradient-to-r from-purple-400 via-pink-500 to-blue-500 overflow-hidden">
          <img
            src="../src/assets/perfil.jpg"
            alt="Perfil Image"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </section>

      <section className="">
        <div className="text-center mb-8">
          <Typography variant="h2" color={colors.brandPrimary}>
            Linguagens
          </Typography>
          <Typography variant="h4" addClassName="text-gray-600">
            Linguagens que eu trabalho!
          </Typography>
        </div>
        <div className="grid grid-cols-3 md:flex md:flex-wrap gap-6 md:gap-11 justify-items-center md:justify-center md:align-middle">
          {techStackIcons.map((icon, index) => (
            <div key={index} className="w-16 h-16 md:w-28 md:h-28">
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>


      <section className="">
        <div className="text-center mb-8">
          <Typography variant="h2" color={colors.brandPrimary}>
            Blibiotecas
          </Typography>
          <Typography variant="h4" addClassName="text-gray-600">
            Bibliotecas que eu trabalho!
          </Typography>
        </div>
        <div className="grid grid-cols-3 md:flex md:flex-wrap gap-6 md:gap-11 justify-items-center md:justify-center md:align-middle">
          {LibsStackIcons.map((icon, index) => (
            <div key={index} className="w-16 h-16 md:w-28 md:h-28">
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="">
        <div className="container mx-auto">
          <Typography variant="h1" color={colors.brandPrimary}>
            Projetos
          </Typography>
          <br />
          <div className="flex flex-wrap justify-center align-middle gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.projectId} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
