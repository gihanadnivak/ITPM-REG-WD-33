import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div class="container">
        <div class="navbar navbar-dark bg-dark">
          <div className="collapse" id="navbarToggleExternalContent"></div>
          <nav className="navbar navbar-dark bg-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
