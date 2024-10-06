import React from "react";

const StatusChip = ({ status }) => {
  const statusStyles = {
    finalizado: "bg-brandSucess text-brandWhite",
    andamento: "bg-brandProcess text-brandWhite",
  };

  const statusText = {
    finalizado: "Finalizado",
    andamento: "Em andamento",
  };

  return (
    <div
      className={`px-4 py-2 rounded-full text-[14px] w-fit bg- ${statusStyles[status]}`}
    >
      {statusText[status]}
    </div>
  );
};

export default StatusChip;
