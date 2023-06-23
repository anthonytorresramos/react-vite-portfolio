import ReactPlayer from "react-player";
import heroImg from "../assets/img/hero1.svg";
import portVideo from "../assets/video/port-video.mp4";
import portThumb from "../assets/img/port-thumb.png";
import { useState } from "react";

const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-12 col-sm-12 col-lg-6">
          <div className="text-center">
            <ReactPlayer
              url={portVideo}
              controls={true}
              width="100%"
              height="100%"
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
          <h1 className="display-6 fw-bold lh-1 mb-3">Hi, I'm Anthony</h1>

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
