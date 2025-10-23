"use client";

import styled from "styled-components";
import { ButtonVariant, ButtonSize } from "./types";

export const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border-width: 1px;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;

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
          background-color: var(--color-success-500);
          color: white;
          border-color: var(--color-success-500);
          &:hover {
            background-color: var(--color-success-400);
            border-color: var(--color-success-400);
          }
        `;
      case "warning":
        return `
          background-color: var(--color-warning-500);
          color: white;
          border-color: var(--color-warning-500);
          &:hover {
            background-color: var(--color-warning-400);
            border-color: var(--color-warning-400);
          }
        `;
      case "error":
        return `
          background-color: var(--color-error-500);
          color: white;
          border-color: var(--color-error-500);
          &:hover {
            background-color: var(--color-error-400);
            border-color: var(--color-error-400);
          }
        `;
      case "default":
      default:
        return `
          background-color: var(--color-primary-500);
          color: white;
          border-color: var(--color-primary-500);
          &:hover {
            background-color: var(--color-primary-400);
            border-color: var(--color-primary-400);
          }
        `;
    }
  }}

  /* Size styles */
  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return `
          padding: 0.25rem 0.5rem;
          font-size: 0.75rem;
        `;
      case "lg":
        return `
          padding: 0.5rem 1rem;
          font-size: 1rem;
        `;
      case "md":
      default:
        return `
          padding: 0.375rem 0.75rem;
          font-size: 0.875rem;
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
