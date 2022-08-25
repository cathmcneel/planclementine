import React from 'react';
import coverImage from '../assets/img/cover-image.jpg';


function About() {
  return (
    <section className="my-5">
      <h1 id="about">Welcome to Clementine! Lets plan your next event!</h1>
     
      <div className="my-2">
        <p>
            CLEMENTINE IS AN ONLINE EVENT PLANNING PLATFORM 
        </p>
      </div>
      <img src={coverImage} className="my-2" style={{ width: "40%", height: "700px" }} alt="cover" />
    </section>
  );
}

export default About;