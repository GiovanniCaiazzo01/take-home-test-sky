import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./Button.styled";
import { ButtonSize } from "./types";
import { ComponentVariant } from "@THTS/UI/types/common";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Omit<ComponentVariant, "info">;
  size?: ButtonSize;
  icon?: ReactNode;
  className?: string;
}

const Button = ({
  variant = "neutral",
  size = "md",
  children,
  className = "",
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      className={className}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
