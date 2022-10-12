import styled from "styled-components";

export const Section2Styles = styled.div`
  width: 100%;
  margin-top: 80px;
  background-color: #bd3039;
  position: Relative;
  margin-bottom: 80px;
  .img {
    background-image: url("/images/franchising/img3.jpg");
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    width: 100%;
    height: 120vh;
  }

  h1 {
    width: 90%;
    margin: auto;
    margin-bottom: 40px;
    text-align: center;
  }

  .content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin: auto;
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .div-info {
    width: 90%;
  }

  p {
    margin-top: 10px;
    width: 90%;
    text-align: center;
  }

  .col1 {
    margin-bottom: 20px;
  }

  @media (min-width: 320px) {
    .img {
      height: 90vh;
    }

    @media (min-width: 765px) {
      margin-bottom: 10%;

      .img {
        height: 110vh;
      }
      .content {
        height: 80%;
      }
      h1 {
        width: 50%;
      }
      p {
        height: 100px;
        width: 50%;
      }
      .div-info {
        width: 95%;
        height: 70%;
        display: flex;
        justify-content: space-around;
        margin: auto;
        flex-wrap: no-wrap;
      }

      .col1,
      .col2 {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 50%;
      }

      .col1 p,
      .col2 p {
        margin-top: 10px;
      }

      @media (min-width: 885px) {
        .div-info {
          width: 85%;
        }
        .img {
          height: 90vh;
        }

        @media (min-width: 1020px) {
          .img {
            height: 80vh;
          }
          @media (min-width: 1320px) {
            .img {
              height: 60vh;
            }
          }
        }
      }
    }
  }
`;
