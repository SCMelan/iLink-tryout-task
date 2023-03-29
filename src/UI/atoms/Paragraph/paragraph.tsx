import { ParagraphStyle } from "./style";

interface IParagraph {
  text: string;
  size?: "P_18" | "P_20" | "P_28";
}

export const Paragraph: React.FC<IParagraph> = ({ text, size }) => {
  return <ParagraphStyle data-size={size}>{text}</ParagraphStyle>;
};
