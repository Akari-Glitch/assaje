import styled from "styled-components";

interface Props {
  reverse: boolean;
}
export const Section2Styles = styled.section<Props>`
  width: 90%;
  margin: auto;
  margin-top: 0px;

  .title {
    color: #bd3039;
  }
  .img {
    width: 100%;
    margin-bottom: 40px;
  }

  p {
    margin-top: 20px;
  }

  .bold {
    font-weight: bold;
  }
  @media (min-width: 580px) {
    .img {
      height: 100vh;
    }

    @media (min-width: 765px) {
      display: flex;
      flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

      align-items: Center;
      justify-content: space-between;

      .img {
        position: relative;
        left: 0;
        width: 60%;
        margin-right: ${(props) => (props.reverse ? "0" : "5%")};
        margin-left: ${(props) => (props.reverse ? "5%" : "0")};
      }

      .div-info {
        max-width: 450px;
      }

      p {
        margin-top: 40px;
      }
      @media (min-width: 1020px) {
        justify-content: space-between;
        .div-info {
          max-width: 100%;
          width: 40%;
        }
        .img {
          width: 43%;
        }
        @media (min-width: 1650px) {
          .div-info {
            width: 40%;
          }
        }
      }
    }
  }
`;
