import { Paragraph, Image, BlockElement } from "../../atoms";
import { Person, Dialog_box } from "../../../img";

import { StyledFirstBlock } from "./style";

export const FirstBlock = () => {
  return (
    <StyledFirstBlock>
      <Paragraph size="P_28" text="Переведите предложение" />
      <BlockElement type="dialog_box">
        <Image alt="Person" src={Person} type="person" />
        <BlockElement type="dialog_window">
          <Image alt="Dialog_box" src={Dialog_box} />
          <Paragraph size="P_20" text="И на солнце есть пятна" />
        </BlockElement>
      </BlockElement>
    </StyledFirstBlock>
  );
};
