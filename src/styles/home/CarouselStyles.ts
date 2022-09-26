import styled from "styled-components";

interface Props {
  image: string;
}

export const CarouselStyles = styled.div<Props>`
  left: 0;
  max-width: 100%;
  min-width: 100%;
  margin: 0;

  .img-div {
    background-image: ${(props) => props.image};
    background-position: center top;
    background-size: cover;
    background-origin: content-box;
    min-width: 100%;
    width: 100%;
    height: 70vh;
  }

  @media (min-width: 400px) {
  }
  @media (min-width: 770px) {
    .img-div {
      height: 80vh;
    }
  }
`;
