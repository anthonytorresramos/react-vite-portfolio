import ReactPlayer from "react-player";
import portVideo from "../assets/video/port-video.mp4";
import portThumb from "../assets/img/port-thumb.png";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const handleEmailButton = () => {
    // window.location.href = "mailto:anthonytorresramos3@gmail.com";
    const email = "anthonytorresramos3@gmail.com";
    const subject = encodeURIComponent("Subject of the email");
    const body = encodeURIComponent("Body of the email");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };
  return (
    <section
      className="container-fluid col-xxl-8 px-4 py-5"
      id="home"
      style={{ height: "100vh" }}
    >
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-12 col-sm-12 col-lg-6">
          <div className="text-center">
            <ReactPlayer
              url={portVideo}
              controls={true}
              width="100%"
              //   height="auto"
              playing={true}
              config={{
                file: {
                  attributes: {
                    poster: portThumb,
                  },
                },
              }}
              className="d-block mx-lg-auto img-fluid"
            />
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <h1 className="display-1 fw-bold lh-1 mb-3">Hi, I'm Anthony</h1>

          <p className="lead">
            My portfolio showcases a collection of projects organized with
            Contentful, a headless CMS. With Contentful, I can easily update and
            present my work, ensuring a seamless browsing experience. Built with
            React and Vite, my portfolio is optimized for speed and
            interactivity. Explore my projects and let's connect to bring your
            ideas to life!"
          </p>
          <div className="d-grid gap-2 d-md-block justify-content-center">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
              onClick={handleEmailButton}
            >
              <FaEnvelope size={32} /> Email Me
            </button>

            <a
              href="https://www.linkedin.com/in/anthony-ramos-dev/"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="me-2" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
