import React from "react";

const PartnerDetails = ({
  details: {
    image,
    logo,
    name,
    country,
    posts,
    followers,
    following,
    website,
    description
  },
  partners
}) => {
  return (
    <React.Fragment>
      <div className="partner-details-header">
        <img className="main-image" alt="" src={image} />
        <img className="logo" alt="" src={logo} />
        <button className="follow-button">Follow</button>
      </div>
      <div className="team-details">
        <div className="centered-content">
          <h3>{name}</h3>
          <p>{country}</p>
          <div className="network-items">
            <div className="network-item">
              <span>{posts}</span>
              <span>Posts</span>
            </div>
            <div className="network-item">
              <span>{followers}</span>
              <span>Followers</span>
            </div>
            <div className="network-item">
              <span>{following}</span>
              <span>Following</span>
            </div>
          </div>
          <button className="message-button">Message</button>
        </div>
        <div className="description">
          <a href="https://canada.nfl.com">
            <i className="fa fa-globe" />
            {website}
          </a>
          <p>{description}</p>
        </div>
        <div className="partners">
          <h3>Our Partners</h3>
          <div className="partner-icons">
            {partners.map(({ id, logo }) => <img key={id} alt="" src={logo} />)}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PartnerDetails;
