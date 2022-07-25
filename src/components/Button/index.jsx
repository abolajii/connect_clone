import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 17px;
  background: ${({ bg }) => (bg ? bg : "#87c121")};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 19px;
  color: white;
  ${({ containerStyles }) => containerStyles}
`;
const CustomButton = ({ label, containerStyles }) => {
  return <Button containerStyles={containerStyles}>{label}</Button>;
};

export default CustomButton;
