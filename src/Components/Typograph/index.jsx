import React from "react";

const Typography = ({
  variant = "body",
  children,
  addClassName = "",
  color = "#ffff",
  align = "center",
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const typographyVariants = {
    h1: `text-4xl md:text-5xl lg:text-6xl font-bold ${
      alignmentClasses[align] || alignmentClasses.center
    }`,
    h2: `text-3xl md:text-4xl lg:text-5xl font-semibold ${
      alignmentClasses[align] || alignmentClasses.center
    }`,
    h3: `text-xl md:text-2xl lg:text-3xl font-regular ${
      alignmentClasses[align] || alignmentClasses.center
    }`,
    h4: `text-lg md:text-xl lg:text-2xl font-semibold ${
      alignmentClasses[align] || alignmentClasses.center
    }`,
    p: `text-base md:text-lg lg:text-xl font-regular ${
      alignmentClasses[align] || alignmentClasses.center
    }`,
  };

  const Tag = variant;
  const variantClass = typographyVariants[variant] || typographyVariants.p;

  return (
    <Tag className={`${variantClass} ${addClassName}`} style={{ color }}>
      {children}
    </Tag>
  );
};

export default Typography;
