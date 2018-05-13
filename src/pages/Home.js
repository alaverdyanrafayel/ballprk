import React, { Component } from "react";
import { AuthHeader, PartnerDetails, Athletes } from "../components";
import "../assets/css/Home.css";
import data from "./data";

class Home extends Component {
  render() {
    const { details, partners, athletes } = data;
    return (
      <React.Fragment>
        <AuthHeader />
        <div className="content">
          <div className="left-content">
            <PartnerDetails details={details} partners={partners} />
          </div>
          <div className="right-content">
            <Athletes athletes={athletes} teamLogo={details.logo} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
