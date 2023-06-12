import styled from "styled-components";

const FilterStyled = styled.form`
  .filter {
    &__select {
      width: 280px;
      height: 48px;
      border-radius: 8px;
      background-color: #0e5e6b;
      font-family: ${(props) => props.theme.fonts.form};
      color: ${(props) => props.theme.colors.background};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 5px 5px 5px 12px;
      font-size: 1.25rem;
      text-align-last: center;
      border-right: 10px solid transparent;
    }
  }
`;
export default FilterStyled;
