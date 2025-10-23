"use client";

import { InputHTMLAttributes, ReactNode } from "react";
import { StyledInputWrapper, StyledIcon, StyledInput } from "./Input.styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  ariaLabel: string;
}

const Input = ({
  id,
  icon,
  ariaLabel,
  ...rest
}: InputProps) => {
  return (
    <StyledInputWrapper>
      {icon && (
        <StyledIcon aria-hidden="true">
          {icon}
        </StyledIcon>
      )}
      <label htmlFor={id} className="sr-only">
        {ariaLabel}
      </label>
      <StyledInput
        id={id}
        {...rest}
      />
    </StyledInputWrapper>
  );
};

export default Input;
