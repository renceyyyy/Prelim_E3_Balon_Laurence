import React from "react";
import UserInfo from "./UserInfo";
import "./App.css";

function Profile({ user, setUser }) {
  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  return (
    <div>

      {/* About Section */}
      <section className="about" id="about">
        <div className="max-width">
          <div
            className="row d-flex justify-content-center h-100"
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-offset="200"
            data-aos-easing="ease-in"
          >
            <h2 className="title">My Profile</h2>
            <div className="about-content">
              <div className="column left">
                <img src="cute.jpg" alt="" />
              </div>
              <div
                className="column right"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-offset="200"
                data-aos-easing="ease-in"
              >
                <p>
                  Hi, I'm Laurence James S. Balon, a BSIT student at Lyceum of
                  Alabang. I’m 18 years old. I chose BSIT because I want to
                  learn how to create functional and usable systems, build
                  system units, and improve my skills in web development.
                  Technology is advancing rapidly, and I want to be part of it.
                </p>
                <br />
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/laurence.balon.31"
                    className="fa fa-facebook"
                  ></a>
                  <a
                    href="https://www.instagram.com/laurencesapero/"
                    className="fa fa-instagram"
                  ></a>
                  <a
                    href="https://github.com/Rencey19/me.github.io"
                    className="fa fa-github"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</div>
  );
};


export default Profile;
