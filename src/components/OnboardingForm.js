import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ComboDatePicker from "./ComboDatePicker";
import { cloneDeep, isEqual } from "lodash";
import { HOME } from "../configs/constants";

class OnboardingForm extends Component {
  state = {
    fields: {
      sport: "",
      position: "",
      school: "",
      birthDate: "",
      gender: ""
    }
  };

  redirectToHome() {
    this.props.history.push(HOME);
  }

  handleSubmit = () => {
    // send to backend and save (ex. call a redux action)
    this.redirectToHome();
  };

  handleChange = ({ target: { value, name } }) => {
    let newState = cloneDeep(this.state);
    if (value) {
      value = value.toString();
    }
    newState.fields[name] = value;
    if (!isEqual(this.state, newState)) {
      this.setState(newState);
    }
  };

  renderCustomGenderInput() {
    const { gender } = this.state.fields;
    return (
      gender === "custom" && (
        <input
          type="text"
          name="gender"
          onChange={this.handleChange}
          className="custom-gender"
          placeholder="What pronoun do you prefer?"
        />
      )
    );
  }

  render() {
    const { fields } = this.state;
    const { handleChange } = this;
    return (
      <React.Fragment>
        <form>
          <div className="form-container">
            <div className="form-group-border">
              <div className="form-group">
                <label htmlFor="sport">Sport</label>
                <input
                  type="text"
                  name="sport"
                  id="sport"
                  placeholder="Baseball"
                  value={fields.sport}
                  onChange={handleChange}
                />
                <label htmlFor="position">Position</label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  placeholder="Choose your position"
                  value={fields.position}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="school">High School</label>
              <input
                type="text"
                name="school"
                id="school"
                value={fields.school}
                onChange={handleChange}
              />
              <label>Birth Date</label>
              <div className="datepicker">
                <ComboDatePicker
                  name="birthDate"
                  placeholder="Year,Month,Date"
                  value={fields.birthDate}
                  onChange={(picker, date) => {
                    handleChange({
                      target: { value: date, name: "birthDate" }
                    });
                  }}
                />
              </div>
              <label>Gender</label>
              <div className="gender-input-group">
                <div className="gender">
                  <input
                    type="radio"
                    value="male"
                    id="m-option"
                    name="gender"
                    onChange={handleChange}
                  />
                  <label htmlFor="m-option">Male</label>
                </div>
                <div className="gender">
                  <input
                    type="radio"
                    id="f-option"
                    value="female"
                    name="gender"
                    onChange={handleChange}
                  />
                  <label htmlFor="f-option">Female</label>
                </div>
                <div className="gender">
                  <input
                    type="radio"
                    id="c-option"
                    value="custom"
                    name="gender"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="c-option"
                    name="gender"
                    onChange={handleChange}
                  >
                    Custom
                  </label>
                </div>
              </div>
              <div className="custom-gender-wrapper">
                {this.renderCustomGenderInput()}
              </div>
            </div>
          </div>
        </form>
        <div className="submit">
          <p onClick={this.handleSubmit}>Next</p>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(OnboardingForm);
