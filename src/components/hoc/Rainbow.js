import React from "react";

// materialize css random color
const Rainbow = (WrappedComponent) => {
  const colours = ["red", "pink", "green", "yellow", "blue", "orange", "brown"];
  const randomColour = colours[Math.floor(Math.random() * 6)];
  const className = randomColour + "-text" + " " + "darken-4";

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};
export default Rainbow;
