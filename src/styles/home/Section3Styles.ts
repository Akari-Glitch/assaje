import styled from "styled-components";

export const Section3Styles = styled.section`
  width: 90%;
  margin: auto;
  margin-bottom: 15%;
  .title {
    color: #bd3039;
    margin-bottom: 20px;
  }
  .img-container img {
    margin-top: 10vh;
    max-width: 100%;
  }

  @media (min-width: 765px) {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 80vh;
    .div-1 {
      width: 40%;
    }
    .img-container {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      top: -2%;
      position: absolute;
      right: 0;
      height: 100%;
      width: 50%;
    }

    .img-container img {
      margin: 0;
      min-width: 100%;
      max-height: 100%;
      min-height: 100%;
      max-width: 100%;
    }

    @media (min-width: 1020px) {
      height: 110vh;

      .title {
        margin-bottom: 50px;
      }

      @media (min-width: 1600px) {
        margin-bottom: 5%;
      }
    }
  }
`;
