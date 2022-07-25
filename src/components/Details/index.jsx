import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

import CustomButton from "../Button";
import { mobileResponsive } from "../../responsive/responsive";

const Container = styled.div`
  position: relative;
  top: 100px;
  padding: 3rem 2rem;
  background: ${({ bg }) => (bg ? bg : "#fff")};

  ${mobileResponsive({
    padding: "0.4rem",
  })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
`;

const ViewMore = styled.div`
  display: flex;
  align-items: center;
  color: #87c121;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  gap: 20px;
  padding: 1rem;

  ${mobileResponsive({
    flexDirection: "column",
  })}
`;

const DetailContainerOne = styled.div`
  height: 350px;
  width: 400px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  ${mobileResponsive({
    width: "100%",
    height: "300px",
  })}
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const FeaturedText = styled.div`
  background: #87c121;
  text-transform: uppercase;
  position: absolute;
  top: 20px;
  right: 0;
  color: #fff;
  padding: 10px 17px;
  border-radius: 3px 0 0 3px;
`;

const BottomTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 10px;
`;

const TextContainer = styled.div`
  padding: 1rem;
`;

const DetailContainerTwo = styled.div`
  flex: 2;
  display: flex;
  gap: 20px;
  div {
    flex: 1;
  }
`;

const DetailContainerTwoContainer = styled.div``;

const ImageTwoContainer = styled.div`
  position: relative;
  background: #eee;
  height: 245px;
  border-radius: 6px;
  overflow: hidden;
  ${mobileResponsive({
    height: "150px",
  })}
`;

const ImageTwo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonContainer = styled.div`
  padding: 1rem;
`;

const Desc = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${({ color }) => (color ? color : "#fff")};

  ${mobileResponsive({
    fontSize: "15px",
  })}
`;

const Amount = styled.p`
  font-weight: 800;
  font-size: 20px;
  font-weight: 700;
  color: #87c121;
`;

const Text = styled.p`
  margin-right: 5px;
`;

const TextContainerTwo = styled.div`
  margin: 10px 0;
`;

const Details = ({ title, imgOne, imgTwo, imgThree, bg }) => {
  return (
    <Container bg={bg}>
      <Top>
        <Title>{title}</Title>
        <ViewMore>
          <Text> View more</Text>
          <FaArrowRight />
        </ViewMore>
      </Top>
      <Bottom>
        <DetailContainerOne>
          <Image src={imgOne} />
          <FeaturedText>Featured</FeaturedText>
          <BottomTextContainer>
            <TextContainer>
              <Desc>Foreign used Toyota</Desc>
              <Amount>N2,400,000</Amount>
            </TextContainer>
            <ButtonContainer>
              <CustomButton
                label="Buy now"
                containerStyles={{
                  backgroundColor: "#FF8300",
                  fontSize: "14px",
                }}
              />
            </ButtonContainer>
          </BottomTextContainer>
        </DetailContainerOne>
        <DetailContainerTwo>
          <DetailContainerTwoContainer>
            <ImageTwoContainer>
              <ImageTwo src={imgTwo} />
            </ImageTwoContainer>
            <TextContainerTwo>
              <Desc color="#000">Foreign used Toyota</Desc>
              <Amount>N2,400,000</Amount>
            </TextContainerTwo>
            <CustomButton
              label="Buy now"
              containerStyles={{
                backgroundColor: "#FF8300",
                fontSize: "14px",
              }}
            />
          </DetailContainerTwoContainer>

          <DetailContainerTwoContainer>
            <ImageTwoContainer>
              <ImageTwo src={imgThree} />
            </ImageTwoContainer>
            <TextContainerTwo>
              <Desc color="#000">Foreign used Toyota</Desc>
              <Amount>N2,400,000</Amount>
            </TextContainerTwo>
            <CustomButton
              label="Buy now"
              containerStyles={{
                backgroundColor: "#FF8300",
                fontSize: "14px",
              }}
            />
          </DetailContainerTwoContainer>
        </DetailContainerTwo>
      </Bottom>
    </Container>
  );
};

export default Details;
