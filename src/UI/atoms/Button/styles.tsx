import styled from "styled-components";

export const ButtonStyle = styled.button`
  user-select: none;
  width: 100%;
  height: 50px;
  border-radius: 100px;
  border: none;
  background-color: white;
  filter: drop-shadow(0 0 0.2rem black);
  cursor: pointer;
  transition: all 0.5s;
  font-size: 20px;
  &[data-is-disabled="true"] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
  &[data-is-mistake="true"] {
    border: 1px solid #999999;
    background-color: rgba(139, 0, 0, 0.5);
    color: white;
  }
  &[data-is-mistake="false"] {
    border: 1px solid #999999;
    background-color: rgba(68, 148, 74, 0.5);
    color: white;
  }
  :hover {
    transition-duration: 0.1s;
    transform: scale(1.2);
  }
  :after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 4em;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 10px 40px white;
    &[data-is-valid="true"] {
      background-color: rgba(51, 204, 51, 0.5);
    }
    &[data-is-valid="false"] {
      background-color: rgba(153, 0, 0, 0.5);
    }
  }
  :active:after {
    box-shadow: 0 0 0 0 white;
    position: absolute;
    border-radius: 4em;
    left: 0;
    top: 0;
    opacity: 1;
    transition: 0s;
  }
  :active {
    top: 1px;
  }
`;
