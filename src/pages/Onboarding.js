import React, { Component } from "react";
import { OnboardingForm } from "../components";
import "../assets/css/Onboarding.css";
import { Header } from "../components";

class Onboarding extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="background-image" />
        <div className="container">
          <div className="inner-content">
            <div className="header">
              <h3>Let's get started</h3>
              <p>
                We saw you across the room and we don't usually do this but...
              </p>
              <div className="prep-school">
                <h4>
                  <i className="fa fa-angle-left" />Prep School
                </h4>
              </div>
            </div>
            <OnboardingForm />
          </div>
        </div>
        <div className="chat">
          <i className="fa fa-comment" />
        </div>
      </div>
    );
  }
}

export default Onboarding;
