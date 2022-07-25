import React from "react";
import styled from "styled-components";
import { mobileResponsive } from "../../responsive/responsive";
import { alignItems } from "../../utils/styles";
import CustomButton from "../Button/index";

const Container = styled.div`
  position: relative;
  top: 100px;
  background: #e5e5e5;
  padding: 35px 0;
  text-align: center;
`;

const Top = styled.p`
  text-transform: capitalize;
  background: #88c020;
  color: #fff;
  padding: 1.4rem;
  text-align: center;
  font-size: 18px;
`;

const Bottom = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;
  height: 400px;

  ${mobileResponsive({
    flexDirection: "column",
    height: "auto",
  })}
`;

const Box = styled.div`
  ${alignItems}
  flex:1;
  flex-direction: column;
  p {
    width: 80%;
    text-align: center;
    margin-top: 50px;
    font-size: 20px;
  }
`;

const Circle = styled.div`
  height: 140px;
  width: 140px;
  border-radius: 50%;
  border: 5px solid #88c020;
  font-size: 40px;
  ${alignItems}
  color: #87c121;
`;

const Steps = () => {
  return (
    <Container>
      <Top>three steps to list your items on connectNigeria</Top>
      <Bottom>
        <Box>
          <Circle>1</Circle>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
        </Box>
        <Box>
          <Circle>2</Circle>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
        </Box>
        <Box>
          <Circle>3</Circle>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
        </Box>
      </Bottom>
      <CustomButton
        label="list now"
        containerStyles={{
          background: "#ff8300",
          marginTop: "15px",
        }}
      />
    </Container>
  );
};

export default Steps;
