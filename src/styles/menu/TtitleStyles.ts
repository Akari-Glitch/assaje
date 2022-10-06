import styled from "styled-components";

export const TitleStyles = styled.h1`
  width: 100%;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  color: #bd3039;
  font-size: 25px;

  @media (min-width: 765px) {
    margin-top: 0;
    font-size: 30px;

    @media (min-width: 900px) {
      font-size: 3.4vw;
    }
  }
`;
