import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
      width: '100%',
    backgroundColor: "#e0e0de",
  }

  const fillerStyles = {
      height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    color: 'black',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
          <div style={fillerStyles}>
              <div style={labelStyles}></div>
      
             
      </div>
    </div>
  );
};

export default ProgressBar;