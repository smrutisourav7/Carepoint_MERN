import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
          eum. Facere temporibus impedit quibusdam soluta hic laudantium sit
          iste dolore numquam, officiis ipsum nesciunt aliquid ipsam accusantium
          tenetur, quos et, perferendis voluptatem velit dolorem eos assumenda!
          Facere illo magnam repellat doloremque odit, temporibus nostrum sequi
          ipsam deleniti impedit maiores expedita.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
