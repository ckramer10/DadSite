import React, { useEffect } from 'react';
import './navBar.scss';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { isNavOpen } from "../../reducers/navBar";
import { TOGGLE_IS_OPEN } from "../../utils/types";
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ isNavOpen, dispatch }) => {
  useEffect(() => {
    const navBar = document.getElementById('navLinks');
    const navBarToggle = document.getElementById('toggleIcon');
    navBarToggle.addEventListener('click', function () {
     navBar.classList.toggle('active');
     dispatch({ type: TOGGLE_IS_OPEN })
    });
    navBar.addEventListener('click', function () {
     navBar.classList.toggle('active');
     dispatch({ type: TOGGLE_IS_OPEN })
    });
  }, []);

  const icon = isNavOpen ? faTimesCircle : faBars;

  return (
    <div className="navBar">
        <div className="navTopWrapper">
            <h1 className="navHeader"><Link to={"/"}>Peter Kramer</Link></h1>
            <ul className="desktopNavLinks">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <FontAwesomeIcon className={classnames('toggleIcon', {'active' : isNavOpen} )} id="toggleIcon"  icon={icon} />
        </div>
        <div className="navDropdown">
            <div className="navLinks" id="navLinks">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
};

const mapStateToProps = state => {
    return({
        isNavOpen: isNavOpen(state)
    })
};

export default connect(mapStateToProps)(NavBar);
