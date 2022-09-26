import styled from "styled-components";

export const Section1Styles = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 15%;
  width: 90%;
  margin-right: auto;
  margin-left: auto;

  .p-2,
  .p-3 {
    margin-top: 20px;
  }
  .p-2 {
    margin-bottom: 40px;
  }

  .p-2 a {
    color: #bd3039;
  }

  .p-3 {
    font-weight: bolder;
  }

  @media (min-width: 765px) {
    position: relative;
    width: 90%;
    letter-spacing: 1.5px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10%;

    .p-3 {
      margin-top: 0;
      margin-bottom: 30px;
    }

    .p-2 {
      position: absolute;
      bottom: 0;
    }
    .div-1 {
      width: 40%;
    }
    .div-2 {
      width: 50%;
    }

    @media (min-width: 1020px) {
      margin-top: 100px;
      margin-bottom: 15%;

      width: 80%;
      justify-content: space-around;
      .div-1 {
        width: 50%;
      }

      .div-2 {
        width: 40%;
      }
      @media (min-width: 1600px) {
        margin-bottom: 20%;
      }
    }
  }
`;
