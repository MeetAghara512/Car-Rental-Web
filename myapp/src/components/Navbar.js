import React, { Component } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { AppContext } from "../Context/AppContext";
import { FaUserCircle } from 'react-icons/fa';


class Navbar extends Component {
  static contextType = AppContext;

  state = {
    clicked: false,
  };

  ClickHandler = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { flagSignUp, firstname, flagLogin } = this.context;

    return (
      <>
        <nav>
          {/* <a href='/home'>
            <svg
              id="logo-14"
              width="73"
              height="49"
              viewBox="0 0 73 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z"
                className="ccustom"
                fill="#68DBFF"
              ></path>
              <path
                d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z"
                className="ccompli1"
                fill="#FF7917"
              ></path>
              <path
                d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z"
                className="ccompli2"
                fill="#5D2C02"
              ></path>
            </svg>
          </a> */}
      <a href="/home">
  <img
    src="/secondLogo.jpg" // Make sure it's placed in the `public` folder
    alt="Logo"
    style={{ objectFit: 'contain',

       borderRadius: '50%',
    width: '69px',
    height: '69px',
     }}
  />
</a>

          <div>
            <ul id="navbar" className={this.state.clicked ? "active" : ""}>
              <li>
                <NavLink to='/Home' className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => this.setState({ clicked: false })}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/About' className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => this.setState({ clicked: false })}
                >
                  About
                </NavLink>
              </li>
              {flagLogin && (
                <li>
                  <NavLink to='/Login' className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => this.setState({ clicked: false })}
                  >
                    Login
                  </NavLink>
                </li>
              )}
              {!flagLogin && (
                <li>
                  <NavLink to='/Logout' className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => this.setState({ clicked: false })}
                  >
                    Logout
                  </NavLink>
                </li>
              )}
              {flagSignUp && (
                <li>
                  <NavLink to='/Signup' className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => this.setState({ clicked: false })}
                  >
                    SignUp
                  </NavLink>
                </li>
              )}
              {!flagSignUp && (
                <li>
                  <NavLink to='/AccountProfile' className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => this.setState({ clicked: false })}
                  >
                    <FaUserCircle className="inline mr-1 mb-1" /> {firstname}
                  </NavLink>
                </li>
              )}

            </ul>
          </div>

          <div id="mobile" onClick={this.ClickHandler}>
            <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
