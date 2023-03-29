import { ButtonStyle } from "./styles";

interface ButtonProps {
  className?: string;
  text: string;
  buttonCheckHandler: () => void;
  disabled?: boolean;
  isDis?: boolean;
  mistake?: null | boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  buttonCheckHandler,
  disabled,
  isDis,
  mistake,
}) => {
  return (
    <ButtonStyle
      data-is-disabled={disabled}
      onClick={buttonCheckHandler}
      disabled={isDis}
      data-is-mistake={mistake}
    >
      {text}
    </ButtonStyle>
  );
};
