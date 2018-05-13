import React from "react";
import { Link } from "react-router-dom";
import SingleAthlet from "./SingleAthlet";

const Athletes = ({ athletes, teamLogo }) => {
  return (
    <div className="main">
      <div className="right-side-nav">
        <div className="links">
          <Link to="#" className="link">
            POSTS
          </Link>
          <Link to="#" className="link">
            OUR ATHLETS
          </Link>
          <Link to="#" className="link">
            PHOTOS
          </Link>
          <Link to="#" className="link">
            VIDEOS
          </Link>
          <Link to="#" className="link">
            EVENTS
          </Link>
        </div>
      </div>
      <div className="athlets">
        <div className="options">
          <div className="option-buttons">
            <div>
              <button>
                <i className="fa fa-thumbs-up" /> Recommend
              </button>
              <button>
                <i className="fa fa-location-arrow" /> Share
              </button>
            </div>
            <button>
              <i className="fa fa-at" /> Mention
            </button>
          </div>
        </div>
        <div className="search-athletes">
          <input type="text" placeholder="Search Athletes" />
          <i className="fa fa-search" />
        </div>
        <div className="athlet-cards">
          {athletes.map(({ id, ...athlet }) => (
            <SingleAthlet athlet={athlet} teamLogo={teamLogo} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Athletes;
