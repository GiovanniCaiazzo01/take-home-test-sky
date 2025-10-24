import { ReactNode } from "react";
import { IconWrapper, StyledChip } from "./Chip.styled";
import { ChipSize } from "./types";
import { Text } from "../Text";
import { ComponentVariant } from "@THTS/UI/types/common";

export interface ChipStatusProps {
  label: string;
  variant?: ComponentVariant;
  size?: ChipSize;
  icon?: ReactNode;
  className?: string;
}

const ChipStatus = ({
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

export default ChipStatus;
