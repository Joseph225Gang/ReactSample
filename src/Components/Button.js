import React from "react";

function Button(props) {
    const handleClick = () => props.onClickFunction(props.increment);
      return (
        <React.Fragment>
        <button onClick={handleClick}>
        +{props.increment}
      </button>
      </React.Fragment>
    );
  }

export default Button;