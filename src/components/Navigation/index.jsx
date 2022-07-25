import React from "react";
import styled from "styled-components";
import { alignItems } from "../../utils/styles";
import { mobileResponsive } from "../../responsive/responsive";

const Container = styled.div`
  position:absolute
  bottom:0;
  left:0;
  width: 100%;
`;

const Inner = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  color: #fff;
  height: 40px;
  background: #ff8300;
  gap: 10px;
  ${mobileResponsive({
    gap: "0px",
    padding: "8px 0",
    height: "30px",
  })}
`;

const EachLink = styled.div`
  width: 100%;
  position: relative;
  ${alignItems}

  ${mobileResponsive({
    fontSize: "11px",
    fontWeight: "600",
  })}
`;

const Stroke = styled.div`
  height: 100%;
  width: 2px;
  background: #fff;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Navigation = () => {
  const navLinks = [
    { id: 1, title: "Businesses" },
    { id: 2, title: "Cars" },
    { id: 3, title: "Deals" },
    { id: 4, title: "Real Estate" },
    { id: 5, title: "Events" },
  ];

  return (
    <Container>
      <Inner>
        {navLinks.map((each, index) => {
          return (
            <EachLink key={each.id}>
              <p>{each.title}</p>
              {index < 4 && <Stroke />}
            </EachLink>
          );
        })}
      </Inner>
    </Container>
  );
};

export default Navigation;
