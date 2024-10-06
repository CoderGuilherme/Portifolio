// ProjectCard.js
import React from "react";
import Typography from "../Typograph";
import { colors } from "../../utils/colors";
import { useNavigate } from "react-router-dom";
const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  function handleNavigate(id) {
    console.log(id);
    navigate(`projetos/${id}`);
  }

  return (
    <div
      onClick={() => handleNavigate(project.projectId)}
      className="bg-white rounded-lg w-auto  max-w-[400px] shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
    >
      <img
        src={project.capa}
        alt={project.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <Typography variant="h3" align="left" color={colors.brandPrimary}>
          {project.name}
        </Typography>
        <Typography variant="p" align="left" color={colors.brandText}>
          {project.shortDescription}
        </Typography>
      </div>
    </div>
  );
};

export default ProjectCard;
