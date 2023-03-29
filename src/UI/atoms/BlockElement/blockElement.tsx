import { StyledBlockElement } from "./style";

interface IBlockElement {
  children?: React.ReactNode;
  text?: string;
  canDrag?: boolean;
  onDragOver?: (e: React.DragEvent<Element>) => void;
  onDragLeave?: (e: React.DragEvent<Element>) => void;
  onDragStart?: (e: React.DragEvent<Element>) => void;
  onDragEnd?: (e: React.DragEvent<Element>) => void;
  onDrop?: (e: React.DragEvent<Element>) => void;
  isChosenWord?: boolean;
  type?: "box" | "word_box" | "DF" | "dialog_box" | "dialog_window";
}

export const BlockElement: React.FC<IBlockElement> = ({
  children,
  canDrag,
  onDragOver,
  onDragLeave,
  onDragStart,
  onDragEnd,
  onDrop,
  type,
  isChosenWord,
}) => {
  return (
    <StyledBlockElement
      draggable={canDrag}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDrop={onDrop}
      data-type={type}
      data-is-chosen={isChosenWord}
    >
      {children && children}
    </StyledBlockElement>
  );
};
