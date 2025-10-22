"use client"

import styled from "styled-components";
import { ChipSize, ChipVariant } from "./types";

export const StyledChip = styled.div<{
  $variant: ChipVariant;
  $size: ChipSize;
}>`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  border-width: 1px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  /* Variant styles */
  ${({ $variant }) => {
    switch ($variant) {
      case "success":
        return `
          background-color: var(--color-success-100);
          color: var(--color-success-500);
          border-color: var(--color-success-300);
        `;
      case "warning":
        return `
          background-color: var(--color-warning-100);
          color: var(--color-warning-500);
          border-color: var(--color-warning-300);
        `;
      case "error":
        return `
          background-color: var(--color-error-100);
          color: var(--color-error-500);
          border-color: var(--color-error-300);
        `;
      case "info":
        return `
          background-color: var(--color-primary-100);
          color: var(--color-primary-600);
          border-color: var(--color-primary-300);
        `;
      case "neutral":
      default:
        return `
          background-color: var(--color-grey-100);
          color: var(--color-grey-700);
          border-color: var(--color-grey-300);
        `;
    }
  }}

  /* Size styles */
  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return `
          padding: 0.125rem 0.5rem;
          font-size: 0.75rem;
          gap: 0.25rem;
        `;
      case "lg":
        return `
          padding: 0.375rem 1rem;
          font-size: 1rem;
          gap: 0.5rem;
        `;
      case "md":
      default:
        return `
          padding: 0.25rem 0.75rem;
          font-size: 0.875rem;
          gap: 0.375rem;
        `;
    }
  }}
`;

export const IconWrapper = styled.span`
  display: flex;
  flex-shrink: 0;
`;

export const Label = styled.span`
  font-weight: 600;
`;
