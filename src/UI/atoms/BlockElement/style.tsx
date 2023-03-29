import styled from "styled-components";

export const StyledBlockElement = styled.div`
  max-width: 510px;
  transition: 0.2s;
  &[data-type="box"] {
    height: fit-content;
    border: 2px solid gray;
    border-radius: 15px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 150px;
    height: fit-content;
  }
  &[data-type="DF"] {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    max-width: 500px;
  }
  &[data-type="word_box"] {
    width: fit-content;
    min-width: 50px;
    min-height: 35px;
    padding: 10px;
    height: 35px;
    border: 1px solid black;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    &[data-is-chosen="true"] {
      box-shadow: 10px 0px 5px rgba(0, 0, 0, 0.5);
    }
  }
  &[data-type="dialog_box"] {
    display: flex;
  }
  &[data-type="dialog_window"] {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
