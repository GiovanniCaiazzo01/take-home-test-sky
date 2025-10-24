"use client";
import styled from "styled-components";
import { TextStyledProps } from "./types";

export const StyledBaseText = styled.div.attrs({
  className: "font-sans m-0",
})<TextStyledProps>``;

export const StyledDisplayXL = styled(StyledBaseText).attrs({
  className: `
    text-[4.5rem] leading-[1.1] tracking-[-0.03em] font-bold
    md:text-[3rem]
  `,
})<TextStyledProps>``;

export const StyledDisplayLG = styled(StyledBaseText).attrs({
  className: `
    text-[3.75rem] leading-[1.15] tracking-[-0.025em] font-bold
    md:text-[2.5rem]
  `,
})<TextStyledProps>``;

export const StyledDisplayMD = styled(StyledBaseText).attrs({
  className: `
    text-[3rem] leading-[1.2] tracking-[-0.02em] font-semibold
    md:text-[2rem]
  `,
})<TextStyledProps>``;

export const StyledDisplaySM = styled(StyledBaseText).attrs({
  className: `
    text-[2.25rem] leading-[1.25] tracking-[-0.015em] font-semibold
    md:text-[1.75rem]
  `,
})<TextStyledProps>``;

export const StyledTitleLG = styled(StyledBaseText).attrs({
  className: `
    text-[1.875rem] leading-[1.3] tracking-[-0.01em] font-semibold
    md:text-[1.5rem]
  `,
})<TextStyledProps>``;

export const StyledTitleMD = styled(StyledBaseText).attrs({
  className: `
    text-[1.5rem] leading-[1.35] font-semibold
    md:text-[1.25rem]
  `,
})<TextStyledProps>``;

export const StyledTitleSM = styled(StyledBaseText).attrs({
  className: `
    text-[1.25rem] leading-[1.4] font-semibold
  `,
})<TextStyledProps>``;

export const StyledBodyLG = styled(StyledBaseText).attrs({
  className: `
    text-[1.125rem] leading-[1.6] font-normal
  `,
})<TextStyledProps>``;

export const StyledBodyMD = styled(StyledBaseText).attrs({
  className: `
    text-[1rem] leading-[1.6] font-normal
  `,
})<TextStyledProps>``;

export const StyledBodySM = styled(StyledBaseText).attrs({
  className: `
    text-[0.875rem] leading-[1.5] font-normal
  `,
})<TextStyledProps>``;

export const StyledCaption = styled(StyledBaseText).attrs({
  className: `
    text-[0.875rem] leading-[1.4] tracking-[0.02em] font-normal
  `,
})<TextStyledProps>``;

export const StyledLabel = styled(StyledBaseText).attrs({
  className: `
    text-[0.875rem] leading-[1.4] tracking-[0.01em] font-medium
  `,
})<TextStyledProps>``;
