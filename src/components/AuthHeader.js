import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

class AuthHeader extends Component {
  constructor(props) {
    super(props);
    this.dropdownRef = React.createRef();
    this.state = {
      isOpen: false
    };
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleClickOutside = event => {
    if (
      this.dropdownRef.current &&
      !this.dropdownRef.current.contains(event.target) &&
      event.target.className !== "fa fa-user-circle"
    ) {
      this.toggleOpen();
    }
  };
  toggleOpen = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };
  render() {
    const { isOpen } = this.state;
    return (
      <nav>
        <div className="navbar-container">
          <p className="ballprk-logo">ballprk</p>
          <div className="right-side-navbar">
            <i className="fa fa-search" />
            <Link to="#" className="link">
              NEWSFEED
            </Link>
            <Link to="#" className="link">
              EXPLORE
            </Link>
            <i className="fa fa-envelope" />
            <i className="fa fa-bell" />
            <i className="fa fa-user-circle" onClick={this.toggleOpen} />
          </div>
        </div>
        <div />
        {isOpen && (
          <div className="dropdown" ref={this.dropdownRef}>
            <Link to="#" className="link">
              LOG OUT
            </Link>
            <Link to="#" className="link">
              NEWSFEED
            </Link>
            <Link to="#" className="link">
              EXPLORE
            </Link>
          </div>
        )}
      </nav>
    );
  }
}

export default AuthHeader;
