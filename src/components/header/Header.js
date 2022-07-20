import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./header.module.scss";

function Header() {
  const { infoUserLogined } = useSelector((state) => state.manageUserReducer);
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <header className={styles.header}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
        <Link className="navbar-brand" to="/">
          <img src="./img/logo.png" alt="logo" width={70} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto text-xl">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                News
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          {Object.values(infoUserLogined).length > 0 ? (
            <div className="text-white font-weight-normal text-xl dropdown">
              <h3
                className="nav-link dropdown-toggle text-white"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Welcome {infoUserLogined.hoTen}
              </h3>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/profile">
                  Change password
                </Link>
                <Link className="dropdown-item" to="/profile/history">
                  History booking
                </Link>
                <div className="dropdown-divider" />
                <span role="button" className="dropdown-item" onClick={handleLogout}>
                  Log out
                </span>
              </div>
            </div>
          ) : (
            <div className="text-white font-weight-normal text-xl">
              <Link to="/login" className="text-reset">
                Login
              </Link>
              <span> / </span>
              <Link to="/signup" className="text-reset">
                Sign up
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
