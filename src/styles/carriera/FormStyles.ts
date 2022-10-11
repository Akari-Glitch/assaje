import styled from "styled-components";

export const FormStyles = styled.div`
  background-color: #e6e7e8;
  padding-top: 10%;
  padding-bottom: 10%;
  form {
    width: 90%;
    margin: auto;
  }

  .div-1 {
    margin-top: 40px;
    margin-bottom: 15px;
  }

  .div-1 div {
    display: flex;
    flex-direction: column;
  }

  .div-1 div label {
    margin-top: 15px;
    margin-bottom: 5px;
  }

  .div-1 div input {
    height: 40px;
    outline: none;
  }
  .red {
    color: #bd3039;
  }

  .div-2 label {
    font-size: 13px;
    margin-left: 3px;
  }
  .div-2 label,
  .red {
    font-weight: lighter;
  }

  .check {
    display: flex;
    align-items: Center;
    width: 50%;
    margin-bottom: 5px;
  }

  .div-2 {
    display: flex;
    margin-bottom: 15px;

    flex-wrap: wrap;
  }

  .div-2 h2 {
    margin-bottom: 10px;
    width: 100%;
  }

  .div-3 {
    margin-bottom: 20px;
  }
  .div-3 h2 {
    margin-bottom: 10px;
  }

  .div-3 textarea {
    width: 100%;
  }

  .div-4 {
    position: relative;
    display: flex;
  }

  .div-4 input {
    position: absolute;
    top: 0;
    left: 0;
    background: red;
  }

  .div-4 p {
    text-indent: 20px;
  }

  .div-5 {
    margin-top: 40px;
  }

  .div-5 span {
    text-decoration: underline;
    font-weight: bolder;
    cursor: pointer;
  }

  @media (min-width: 765px) {
    .div-1 {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .div-1 div {
      width: 30%;
    }

    .check {
      width: auto;
      margin-right: 5%;
    }
  }
`;
