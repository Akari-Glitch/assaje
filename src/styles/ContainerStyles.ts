import styled from "styled-components";

export const ContainerStyles = styled.main`
  .ultra-small {
    font-size: 12px;
  }

  .small {
    font-size: 14px;
  }

  .middle {
    font-size: 20px;
  }

  .big {
    font-size: 25px;
  }

  .extra-big {
    font-size: 30px;
  }

  @media (min-width: 765px) {
    .middle {
      font-size: 25px;
    }

    .big {
      font-size: 30px;
    }

    .extra-big {
      font-size: 35px;
    }

    @media (min-width: 1020px) {
      .extra-big {
        font-size: 4vw;
      }
      @media (min-width: 1650px) {
        .middle {
          font-size: 2vw;
        }
        .ultra-small {
          font-size: 0.8vw;
        }

        .big {
          font-size: 2.3vw;
        }
      }
    }
  }
`;
