const MyProjects = () => {
  return (
    <section id="my-projects">
      {/* TODO: display cards that shows all my previous projects */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://picsum.photos/150/150"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://picsum.photos/150/150"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://picsum.photos/150/150"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyProjects;
