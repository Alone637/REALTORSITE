import React from "react";
import { StyledHeaderDiv, StyledHeaderLink } from "./HeaderButtons.style";

interface IAppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonLabel: string;
  isPrimary: boolean;
  hreftext: string;
}

export const HeaderButton = ({
  buttonLabel,
  hreftext,
  isPrimary,
}: IAppButtonProps) => {
  return (
    <StyledHeaderDiv>
    <StyledHeaderLink href={hreftext} className={isPrimary ? "primary" : "secondary"}>
      {buttonLabel}
    </StyledHeaderLink>
    </StyledHeaderDiv>
  );
};
