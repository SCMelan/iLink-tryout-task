import styled from "styled-components";

export const ImageStyle = styled.img`
  user-select: none;
  &[data-type="person"] {
    max-width: 190px;
    max-height: 285px;
  }
`;
