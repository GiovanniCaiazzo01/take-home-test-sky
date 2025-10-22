"use client";

import Text from "../Text";
import { ChipStatusProps, IconWrapper, StyledChip } from "./Chip.styled";

export const ChipStatus = ({
  variant = "neutral",
  size = "md",
  label,
  icon,
  className = "",
}: ChipStatusProps) => {
  return (
    <StyledChip $variant={variant} $size={size} className={className}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <Text variant="label">{label}</Text>
    </StyledChip>
  );
};
