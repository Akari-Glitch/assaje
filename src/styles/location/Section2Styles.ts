import styled from "styled-components";

export const Section2Styles = styled.section`
  left: 0;
  max-width: 100%;
  min-width: 100%;
  margin: 0;

  .img-div {
    background-image: url("/images/location/img2.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-origin: content-box;
    min-width: 100%;
    width: 100%;
    height: 30vh;
  }

  @media (min-width: 770px) {
    .img-div {
      height: 80vh;
    }
  }
`;
