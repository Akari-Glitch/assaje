import styled from "styled-components";

export const MaiolicaStyles = styled.section`
  margin-bottom: 10%;

  .img-1 {
    background-image: url("/images/home/section3/maiolica.jpg");
    width: 100%;
    height: 30vh;
    background-size: cover;
  }

  @media (min-width: 765px) {
    margin-bottom: 10%;

    .img-1 {
      height: 40vh;
    }
  }
`;
