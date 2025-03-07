import React from "react";

function Home() {
  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-2"> I'm </div>
          <div className="text-3">
            Laurence Balon<span className="typing"></span>
          </div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <div className="social-links">
            <a href="https://www.facebook.com/laurence.balon.31" className="fa fa-facebook"></a>
            <a href="https://www.instagram.com/laurencesapero/" className="fa fa-instagram"></a>
            <a href="https://github.com/Rencey19/me.github.io" className="fa fa-github"></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
