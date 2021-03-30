import React from "react";
import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toogleIsOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toogleIsOpen}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toogleIsOpen}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toogleIsOpen}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toogleIsOpen}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toogleIsOpen}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin" onClick={toogleIsOpen}>
            Sign In
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

// styling start

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media screen and (min-width: 960px) {
    display: none;
  }
`;

const CloseIcon = styled(FaTimes)`
  color: white;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: white;
`;

const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 160px;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
    margin-bottom: 0;
  }
`;

const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-out;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SidebarRoute = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 1rem 4rem;
  color: #010606;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
  }
`;
// styling end

export default Sidebar;
