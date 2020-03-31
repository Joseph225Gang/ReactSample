import React from "react";

function Display(props) {
	return (
        <React.Fragment>
  	<div>{props.message}</div>
      </React.Fragment>
  );
}

export default Display;