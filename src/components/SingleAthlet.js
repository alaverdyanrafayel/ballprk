import React from "react";

const SingleAthlet = ({
  teamLogo,
  athlet: { image, logo, firstname, lastname, position, team }
}) => {
  return (
    <div className="athlet">
      <img className="athlet-pic" src={image} alt="athlet" />
      <img className="image-logo" src={logo} alt="" />
      <img className="team-logo" alt="" src={teamLogo} />
      <button className="profile-follow-button">Follow</button>
      <div className="profile-information">
        <h4>
          {firstname} {lastname}
        </h4>
        <p>{position}</p>
        <p>{team}</p>
      </div>
      <div className="profile-buttons">
        <button className="btn-msg">Message</button>
        <button className="btn-session">Book Session</button>
      </div>
    </div>
  );
};

export default SingleAthlet;
