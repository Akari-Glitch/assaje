import styled from "@emotion/styled";

export const HeaderStyles = styled.header`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 300;

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
  }

  .menu-icon-container {
    display: flex;
    z-index: 100;
    margin-top: 15px;
    align-items: flex-end;
  }
  .menu-icon {
    font-size: 40px;
  }
  .logo {
    display: flex;
    align-items: center;
    width: 200px;
    justify-content: center;
  }
  svg {
    width: 100%;
  }

  @media (min-width: 765px) {
    height: 200px;
    padding: 25px 0;
    .menu-icon {
      display: none;
    }

    .header-content {
      justify-content: center;
    }

    .logo {
      width: 300px;
    }

    @media (min-width: 1720px) {
      .logo {
        width: 30vw;
      }
    }
  }
`;
