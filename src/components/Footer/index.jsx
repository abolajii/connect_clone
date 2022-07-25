import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { alignItems } from "../../utils/styles";

const Container = styled.div`
  position: relative;
  top: 100px;
  background: #fff;
  height: 300px;
  text-align: center;
  padding: 1rem;
  ${alignItems}
  flex-direction: column;
`;

const Text = styled.p`
  line-height: 1.9;
`;

const ImageContainer = styled.div``;

const Image = styled.img``;

const Footer = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={logo} />
      </ImageContainer>
      <Text>
        4A Manuwa Street, off Keffi Street, off Awolowo Road, Ikoyi, Lagos
      </Text>
      <Text>P:0809 800 5000</Text>
      <Text>E: businesses@connectnigeria.com</Text>
    </Container>
  );
};

export default Footer;
