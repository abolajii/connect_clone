import React from "react";
import styled from "styled-components";

import bg from "../../assets/hero.svg";
import { mobileResponsive } from "../../responsive/responsive";
import CustomButton from "../Button";

const Container = styled.div`
  position: relative;
  top: 100px;
`;

const ImageBackground = styled.div`
  background-image: url(${bg});
  height: 700px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  ${mobileResponsive({
    height: "600px",
  })}
`;

const Hero = () => {
  return (
    <Container>
      <ImageBackground>
        <CustomButton
          label="SHOP NOW"
          containerStyles={{
            marginBottom: "60px",
          }}
        />
      </ImageBackground>
    </Container>
  );
};

export default Hero;
