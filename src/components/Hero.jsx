import ReactPlayer from "react-player";
import heroImg from "../assets/img/hero1.svg";
import portVideo from "../assets/video/port-video.mp4";

const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-12 col-sm-12 col-lg-6">
          {/* <img
            src={heroImg}
            className="d-block mx-lg-auto img-fluid"
            alt="programmer-male"
            width="100%"
          /> */}
          <ReactPlayer url={portVideo} controls={true} />
        </div>
        <div className="col-lg-6 text-center">
          <h1 className="display-3 fw-bold lh-1 mb-3">Welcome</h1>
          <h1 className="display-3 fw-bolder lh-1 mb-3">to my Portfolio</h1>
          <p className="lead">
            My portfolio showcases a collection of projects organized with
            Contentful, a headless CMS. With Contentful, I can easily update and
            present my work, ensuring a seamless browsing experience. Built with
            React and Vite, my portfolio is optimized for speed and
            interactivity. Explore my projects and let's connect to bring your
            ideas to life!"
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
