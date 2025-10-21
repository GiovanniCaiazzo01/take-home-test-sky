"use client";

import styled from "styled-components";

interface TextProps {
  className?: string;
}

// Componente base per tutte le tipografie
export const BaseText = styled.div.attrs({
  className: "font-sans m-0",
})<TextProps>``;

// Display XL
export const DisplayXL = styled(BaseText).attrs({
  className: `
    text-[4.5rem] leading-[1.1] tracking-[-0.03em] font-bold
    md:text-[3rem]
  `,
})<TextProps>``;

// Display LG
export const DisplayLG = styled(BaseText).attrs({
  className: `
    text-[3.75rem] leading-[1.15] tracking-[-0.025em] font-bold
    md:text-[2.5rem]
  `,
})<TextProps>``;

// Display MD
export const DisplayMD = styled(BaseText).attrs({
  className: `
    text-[3rem] leading-[1.2] tracking-[-0.02em] font-semibold
    md:text-[2rem]
  `,
})<TextProps>``;

// Display SM
export const DisplaySM = styled(BaseText).attrs({
  className: `
    text-[2.25rem] leading-[1.25] tracking-[-0.015em] font-semibold
    md:text-[1.75rem]
  `,
})<TextProps>``;

// Title LG
export const TitleLG = styled(BaseText).attrs({
  className: `
    text-[1.875rem] leading-[1.3] tracking-[-0.01em] font-semibold
    md:text-[1.5rem]
  `,
})<TextProps>``;

// Title MD
export const TitleMD = styled(BaseText).attrs({
  className: `
    text-[1.5rem] leading-[1.35] font-semibold
    md:text-[1.25rem]
  `,
})<TextProps>``;

// Title SM
export const TitleSM = styled(BaseText).attrs({
  className: `
    text-[1.25rem] leading-[1.4] font-semibold
  `,
})<TextProps>``;

// Body LG
export const BodyLG = styled(BaseText).attrs({
  className: `
    text-[1.125rem] leading-[1.6] font-normal
  `,
})<TextProps>``;

// Body MD
export const BodyMD = styled(BaseText).attrs({
  className: `
    text-[1rem] leading-[1.6] font-normal
  `,
})<TextProps>``;

// Body SM
export const BodySM = styled(BaseText).attrs({
  className: `
    text-[0.875rem] leading-[1.5] font-normal
  `,
})<TextProps>``;

// Caption
export const Caption = styled(BaseText).attrs({
  className: `
    text-[0.875rem] leading-[1.4] tracking-[0.02em] font-normal
  `,
})<TextProps>``;

// Label
export const Label = styled(BaseText).attrs({
  className: `
    text-[0.875rem] leading-[1.4] tracking-[0.01em] font-medium
  `,
})<TextProps>``;
