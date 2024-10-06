import capa_sea from "../Portifolio/src/assets/SeaSense-capa.png"
import tela_sea from "../Portifolio/src/assets/SeaSense-tela.png"


import pythonIcon from "../Portifolio/src/assets/python-icon.svg"
import pandasIcon from "../Portifolio/src/assets/pandas-icon.svg"
import streamlitIcon from "../Portifolio/src/assets/streamlit-icon.svg"
import plotlyIcon from "../Portifolio/src/assets/plotly-icon.svg"

export const projects = [
  {
    projectId: 1,
    name: "SeaSense",
    status: "Finalizado",
    shortDescription:
      "O SeaSense é um dashboard inovador que monitora em tempo real as condições ambientais durante a navegação.",
    capa:capa_sea ,
    image: tela_sea,
    techUsadas: [
      pythonIcon,streamlitIcon,plotlyIcon,pandasIcon
    ],
    description:
      "O SeaSense é um dashboard desenvolvido com Pandas e Streamlit, criado para a Global Solution como parte de um case do 1º semestre da FIAP. Ele monitora em tempo real as condições ambientais durante a navegação, filtrando microplásticos e nanoplásticos, capturando plásticos maiores e coletando dados sobre a qualidade da água.",
    repositorio: "https://github.com/CoderGuilherme/dash_python"
  }]