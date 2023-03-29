import styled from "styled-components";

export const ParagraphStyle = styled.p`
  user-select: none;
  &[data-size="P_18"] {
    font-size: 18px;
  }
  &[data-size="P_20"] {
    max-width: 225px;
    font-size: 20px;
    margin-top: -60px;
  }
  &[data-size="P_28"] {
    font-size: 28px;
    margin: 15px 0;
    text-align: center;
  }
`;
