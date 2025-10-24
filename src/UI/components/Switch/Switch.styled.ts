import styled, { css } from "styled-components";
import { BaseButton } from "../Button/Button.styled";

export const SwitchButton = styled(BaseButton)<{ $on: boolean }>`
  width: 2.75rem;
  height: 1.5rem;
  border-radius: 9999px;
  position: relative;
  padding: 0;

  ${({ $on }) =>
    $on
      ? css`
          background-color: var(--color-primary-400);
        `
      : css`
          background-color: var(--color-grey-400);
        `}

  &:focus {
    outline: 2px solid var(--color-primary-400);
    outline-offset: 2px;
  }
`;

export const Thumb = styled.span<{ $on: boolean }>`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 1.25rem;
  height: 1.25rem;
  background: white;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;

  ${({ $on }) =>
    $on
      ? css`
          transform: translateX(1.25rem);
        `
      : css`
          transform: translateX(0);
        `}
`;
