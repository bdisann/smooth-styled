import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button.styled";

import Video1 from "../../assets/videos/video-2.mp4";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => setHover(!hover);
  return (
    <HeroContainer id="home">
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video1} type="video/mp4" />
      </HeroBackground>
      <HeroContent>
        <HeroText>
          <HeroTitle>
            Sign Up for New Account Today and Receive $250 in CASH Towards Your
            Next Payment.
          </HeroTitle>
        </HeroText>
        <HeroBtnWrapper>
          <Button
            to="signup"
            bigButton
            primary
            dark
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {hover ? <ArrowFoward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

// styling start

const HeroContainer = styled.div`
  margin-top: -80px;
  background: #0c0c0c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    /* display: inline-block; */
    top: 0;
    right: 0;
    /* bottom: 0;
    left: 0; */
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

const HeroContent = styled.div`
  z-index: 2;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

const HeroText = styled.p`
  margin-top: 24px;
  color: white;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    transition: all 0.2s ease-in-out;
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    transition: all 0.2s ease-in-out;
    font-size: 18px;
  }
`;

const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArrowFoward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

// styling ended

export default HeroSection;
