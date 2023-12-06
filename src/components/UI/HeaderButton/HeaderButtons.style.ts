import styled from "styled-components";
export const StyledHeaderDiv = styled.div`
  display:flex
`
export const StyledHeaderLink = styled.a`
  justify-content: center;

  &:hover {
      color: black;
  }

  &.primary:hover{
    color:black;
    text-decoration:none;
  }

  cursor: pointer;
  padding: 12px 15px;
  font-size: inherit;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primeColor};
  color: white;
  transition: 200ms;

  &:disabled {
    background-color: ${(props) => props.theme.colors.disabledBgc};
  }

  &.primary {
    background-color: gray;
    color: white;
  }

  &.secondary {
    background-color: ${(props) => props.theme.colors.lightGray};
    color: ${(props) => props.theme.colors.placeholderColor};
  }

  &:disabled:hover {
    cursor: default;
    opacity: 0.5;
  }

  &:hover {
    translate: 0 -5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
  }

  &:active {
    transition: 100ms;
    translate: 0 0;
    box-shadow: none;
  }
`;