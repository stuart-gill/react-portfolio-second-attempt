import React from "react";
import PropTypes from "prop-types";

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <style jsx>
          {`
            h2:hover {
              color: #a9a9a9;
            }

            .wrapper {
              display: grid;
              grid-template-columns: 1fr 2fr;
              grid-template-areas: "basic  details";
            }
            .basic {
              grid-area: basic;
            }
            .details {
              grid-area: details;
              margin-left: 50px;
            }
          `}
        </style>
        <div className="basic">
          <h2
            onClick={() => {
              this.props.onSelectProject(this.props.projectId);
            }}
          >
            {this.props.name}
          </h2>
          <p>{this.props.shortDescription}</p>
        </div>

        {this.props.projectId === this.props.selectedProject && (
          <div className="details">
            <p>Authors: {this.props.authors}</p>
            <p>
              Link: <a href={this.props.link}>{this.props.link}</a>{" "}
            </p>
            <ul>
              {this.props.languages.map((languages, index) => (
                <li key={index}>{languages}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Project.propTypes = {
  selectedProject: PropTypes.string,
  onSelectProject: PropTypes.func,
  name: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(String).isRequired,
  shortDescription: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string,
  key: PropTypes.number,
  projectId: PropTypes.string
};

export default Project;
