
import { projects } from "../project_data";

console.log(projects);
const MyProjects = () => {
  return (
    <section id="my-projects" style={{ minHeight: "80vh", paddingTop: "10vh" }}>
      <div className="project-section">
        <div className="container">
          <h1 className="text-center">My Projects</h1>
          <div className="row">
            {projects.map((project) => {
              return (
                <div
                  className="col-md-4 col-lg-3 col-sm-12 mb-3 justify-content-start"
                  key={project.id}
                >
                  <div className="card">
                    <img
                      src="https://picsum.photos/300/300"
                      className="card-img-top"
                      alt="Project 1"
                      style={{
                        width: "100%",
                        height: "20vh",
                        cursor: "pointer",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">
                        Short description of Project 1.
                      </p>
                      <a href="#" className="btn btn-primary btn-sm">
                        View More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};
export default MyProjects;
