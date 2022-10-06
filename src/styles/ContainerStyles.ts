import styled from "styled-components";

export const ContainerStyles = styled.main`
  overflow-x: hidden;
  .ultra-small {
    font-size: 12px;
  }

  .small {
    font-size: 14px;
  }

  .middle {
    font-size: 19px;
  }

  .big {
    font-size: 24px;
  }

  .extra-big {
    font-size: 29px;
  }

  @media (min-width: 765px) {
    .middle {
      font-size: 24px;
    }

    .big {
      font-size: 29px;
    }

    .extra-big {
      font-size: 34px;
    }

    @media (min-width: 1020px) {
      .extra-big {
        font-size: 3vw;
      }
      @media (min-width: 1650px) {
        .middle {
          font-size: 1.6vw;
        }
        .ultra-small {
          font-size: 0.8vw;
        }
        .small {
          font-size: 1vw;
        }
        .big {
          font-size: 2vw;
        }
      }
    }
  }
`;
