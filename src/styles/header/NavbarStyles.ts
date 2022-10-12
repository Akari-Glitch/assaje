import styled from "@emotion/styled";

interface Props {
  show: string;
}
export const NavbarStyles = styled.nav<Props>`
  display: flex;
  position: fixed;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background: white;
  transform: ${(props) => props.show};
  transition: transform 0.3s;

  .nav-content {
    display: flex;
    align-items: flex-start;
    height: 75%;
  }

  ul {
    display: flex;
    height: 85%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  ul li {
    list-style: none;
    width: 100%;
  }

  ul li a {
    display: inline-block;
    color: black;
    width: 100%;
    text-align: center;
    height: 100%;
    font-size: 22px;
    text-align: center;
    font-weight: bolder;
    text-decoration: none;
    transition: 0.3s;
  }

  ul li a:hover {
    color: #bd3039;
  }
  .active-link {
    color: #bd3039;
  }
  .ordina-btn {
    background: #bd3039;
    padding: 10px 15px;
    border-radius: 7px;
    border: 1px solid #bd3039;
    color: white;
    transition: 0.3s;
  }
  .ordina-li {
    margin-top: 20px;
  }

  @media (min-width: 765px) {
    position: sticky;
    margin-top: 170px;
    transform: translate(0);
    height: 80px;
    z-index: 300;
    align-items: center;
    .nav-content {
      display: flex;
      align-items: Center;
      width: 100%;
    }
    ul {
      position: static;
      margin: 0;
      width: 100%;
      bottom: 30px;
      justify-content: space-around;
      align-items: center;
      height: 100px;
      flex-direction: row;
    }

    ul li {
      width: auto;
    }
    .ordina-li {
      margin-top: 0;
    }
    .ordina-btn {
      padding: 13px 17px;
      width: 140px;
    }

    ul li a {
      font-size: 16px;
      width: 90%;
      font-weight: bolder;
    }
    .ordina-btn:hover {
      background: white;
      border: 1px solid #bd3039;
      color: #bd3039;
    }
    @media (min-width: 1000px) {
      .nav-content {
        width: 920px;
      }
      @media (min-width: 1720px) {
        margin-top: 190px;
        height: 10vh;

        .nav-content {
          width: 60%;
        }
        ul li a {
          font-size: 1vw;
        }
        .ordina-btn {
          width: 8vw;
        }
      }
    }
  }
`;
