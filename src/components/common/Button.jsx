import React from "react";

const Button = ({ icon: Icon, text, additionalClasses }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded ${additionalClasses}`}
    >
      {/* Render the icon if provided */}
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export default Button;
