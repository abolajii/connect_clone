import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import CustomButton from "../Button";
import Navigation from "../Navigation";

const Container = styled.div`
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 1rem;
`;

const LogoContainer = styled.div``;

const Image = styled.img``;

const MiddleText = styled.p`
  color: #87c121;
  font-style: italic;

  @media (max-width: 400px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <Container>
      <Inner>
        <LogoContainer>
          <Image src={logo} />
        </LogoContainer>
        <MiddleText>Bringing you our products and deals...</MiddleText>
        <CustomButton label="LIST NOW" />
      </Inner>
      <Navigation />
    </Container>
  );
};

export default Header;
