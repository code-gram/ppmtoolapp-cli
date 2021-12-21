import React from "react";
import { Link } from "react-router-dom";

const CreateProjectButton = (props) => {
  return (
    <React.Fragment>
      <Link to="/addProject" className="btn btn-lg btn-info">
        {props.label}
      </Link>
    </React.Fragment>
  );
};

export default CreateProjectButton;
