import styled, { keyframes } from "styled-components";

const pulse = keyframes`
0% {
    background-color: #5b2d82;
}
50% {
    background-color: #8d44ad;
}
100% {
    background-color: #5b2d82;
}
`;

export const Container = styled.div`
  background-color: #5b2d82;
  animation: ${pulse} 2s ease-in-out infinite;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  p {
    color: #fff;
  }
`;

export const Title = styled.h1`
  font-family: "GameFont";
  font-size: 48px;
  color: #ffffff;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: none;
  outline: none;

  // remove up and down arrows from input
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  margin-bottom: 20px;
  margin-right: 10px;
  background-color: ${({ gameWon }) => (gameWon ? "#00cc00" : "#fff")};
`;

export const Button = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: none;
  outline: none;
`;
export const Message = styled.p`
  color: ${({ gameWon }) => (gameWon ? "#00cc00" : "#ffffff")};
`;
