import React, { Component } from "react";
import ProjectItemComponent from "./ProjectItemComponent";

import CreateProjectButton from "./projects/CreateProjectButton";
import { getProjects } from "../actions/ProjectAction";
import { PropTypes } from "prop-types";

import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    const { projects } = this.props.projects;
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectButton label="Make A Project" />
              <br />
              <hr />
              {projects.map((project) => {
                return (
                  <ProjectItemComponent key={project.id} project={project} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  getProjects: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps, { getProjects })(Dashboard);
