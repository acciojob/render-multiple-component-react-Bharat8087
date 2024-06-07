import React from 'react';

const projects = [
  { name: 'Project 1', description: 'Description for Project 1' },
  { name: 'Project 2', description: 'Description for Project 2' },
  { name: 'Project 3', description: 'Description for Project 3' }
];

function App() {
  return (
    <div className="ns-wrapper">
      {/* Iterate over the projects array */}
      {projects.map((project, index) => (
        <div key={index}>
          {/* Render the project name with data-ns-test attribute */}
          <h1 data-ns-test="project-name">{project.name}</h1>
          {/* Render the project description with data-ns-test attribute */}
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  );
}

export default App;
