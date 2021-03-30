import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import { FaBars } from "react-icons/fa";

const Navbar = ({ toogleIsOpen }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeScrollNav = () => {
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScrollNav);
  }, []);
  return (
    <Nav sn={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/">smooth</NavLogo>
        <MobileIcon onClick={toogleIsOpen}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks smooth duration={500} spy exact to="about">
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks smooth duration={500} spy exact to="discover">
              Discover
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              smooth
              duration={500}
              spy
              activeClass="active"
              to="services"
            >
              Services
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks smooth duration={500} activeClass="active" to="signup">
              Sign Up
            </NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink smooth duration={500} to="signin">
            Sign In
          </NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

// start styling

const Nav = styled.nav`
  background: ${({ sn }) => (sn ? "black" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 960px) {
    transition: ease all 0.3s;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  z-index: 1;
`;

const NavLogo = styled(LinkRouter)`
  display: flex;
  justify-self: flex-start;
  color: white;
  cursor: pointer;
  font-size: 2rem;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.2s ease;

  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
    transition: all 0.2s ease;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 100%;
`;

const NavLinks = styled(LinkScroll)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: #010606;
  }
`;

// end styling

export default Navbar;
