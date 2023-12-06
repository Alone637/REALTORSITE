import React from "react";
import { StyledButton } from "./LinkButton.style";

interface IAppButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonLabel: string;
  isPrimary: boolean;
}

export const LinkButton = ({
  buttonLabel,
  type,
  isPrimary,
  onClick,
}: IAppButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      className={isPrimary ? "primary" : "secondary"}
    >
      {buttonLabel}
    </StyledButton>
  );
};

