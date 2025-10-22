import {
  StyledBaseText,
  StyledDisplayXL,
  StyledDisplayLG,
  StyledDisplayMD,
  StyledDisplaySM,
  StyledTitleLG,
  StyledTitleMD,
  StyledTitleSM,
  StyledBodyLG,
  StyledBodyMD,
  StyledBodySM,
  StyledCaption,
  StyledLabel,
} from "./Text.styled";

import { ComponentPropsWithoutRef, ElementType } from "react";
import { TextVariant } from "./types";

export interface TextProps extends ComponentPropsWithoutRef<"div"> {
  variant?: TextVariant;
  as?: ElementType;
}

const variantMap: Record<TextVariant, any> = {
  base: StyledBaseText,
  "display-xl": StyledDisplayXL,
  "display-lg": StyledDisplayLG,
  "display-md": StyledDisplayMD,
  "display-sm": StyledDisplaySM,
  "title-lg": StyledTitleLG,
  "title-md": StyledTitleMD,
  "title-sm": StyledTitleSM,
  "body-lg": StyledBodyLG,
  "body-md": StyledBodyMD,
  "body-sm": StyledBodySM,
  caption: StyledCaption,
  label: StyledLabel,
};

const Text = ({ variant = "base", as, children, ...rest }: TextProps) => {
  const Component = variantMap[variant];
  return (
    <Component as={as} {...rest}>
      {children}
    </Component>
  );
};

export default Text;
