"use client";

import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 2.5rem;
  margin-bottom: 0.5rem; /* mb-2 */
  width: 100%;
`;

export const StyledIcon = styled.span`
  position: absolute;
  left: 1rem;
  color: var(--color-grey-400);
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.25rem;  /* h-5 */
    height: 1.25rem; /* w-5 */
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 9999px; /* rounded-full */
  background-color: var(--color-grey-100);
  padding: 0.75rem 3rem; /* py-3 pl-12 pr-12 */
  font-size: 1.125rem;   /* text-lg */
  color: var(--color-grey-700);
  outline: none;
  border: 1px solid var(--color-grey-300); /* ring-1 ring-grey-300 */
  transition: all 0.2s ease;

  &:focus {
    ring: none;
    box-shadow: 0 0 0 2px var(--color-primary-400); /* focus:ring-2 focus:ring-primary-400 */
  }

  &::placeholder {
    color: var(--color-grey-400);
  }
`;
