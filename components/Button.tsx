import styled from "styled-components";
export const LanguageButton = styled.div`
  border-width: 1.5px;
  border-color: rgb(241, 242, 244);
  border-style: solid;
  border-radius: 7px;
  background-color: ${(props) => props.theme.colors.danger};
  box-shadow: 0px 2px 6.42px 4.58px rgba(70, 70, 70, 0.13);
  width: 150px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: "Arial Black", sans-serif;
  color: rgb(255, 255, 255);
  line-height: 1.5;
  text-align: center;
  cursor: pointer;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    display: none;
  }
`;
export const Button = styled.button`
  border-width: 1.5px;
  border-color: rgb(241, 242, 244);
  border-style: solid;
  border-radius: 7px;
  background-color: ${(props) => props.theme.colors.danger};
  box-shadow: 0px 2px 6.42px 4.58px rgba(70, 70, 70, 0.13);
  width: 100px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-family: "Arial Black", sans-serif;
  color: rgb(255, 255, 255);
  line-height: 1.5;
  text-align: center;
  margin: 10px;
  cursor: pointer;
  /* @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    display: none;
  } */
`;
export const CheckBoxLabel = styled.label`
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: red;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
