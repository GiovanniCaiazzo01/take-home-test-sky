
import React, { ButtonHTMLAttributes, ReactNode } from "react"
import { StyledButton } from "./Button.styled"
import { ButtonSize, ButtonVariant } from "./types"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  children: ReactNode
  className?: string
}

const Button = ({
  variant = "default",
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
      {children} </StyledButton>
  )
}

export default Button
