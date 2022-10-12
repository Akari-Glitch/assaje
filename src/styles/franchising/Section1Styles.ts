import styled from "styled-components";

export const Section1Styles = styled.section`
  width: 90%;
  margin: auto;

  img {
    width: 100%;
  }

  h1 {
    margin-bottom: 40px;
  }
  p {
    margin-bottom: 20px;
  }

  .div-info-2 {
    margin-top: 40px;
    text-align: center;
  }

  @media (min-width: 765px) {
    display: flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-around;
    img {
        position:relative;
        right:-10%;
      width: 60%;
    }

    .div-info {
      width: 40%;
    }

    .div-info-2{
        margin-top: 5%;
        width:100%:
    }

  @media (min-width: 1020px) {
        .div-info-2{
        width: 55%;
          
        }


    }
  }
`;
