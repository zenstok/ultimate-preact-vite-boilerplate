import styled from "styled-components";
import { themeColors } from "../../../../styles/global";

export const MainContainer = styled.div`
  user-select: none;
`;

export const TriggerContainer = styled.div<{ $isVisible: boolean }>`
  width: 150px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  gap: 16px;
  border: 1px solid ${themeColors.gray["700"]};

  svg {
    transition: all 0.05s ease;
    ${({ $isVisible }) => $isVisible && `transform: rotate(180deg)`};
  }
`;

export const DropdownItemsContainer = styled.div<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  z-index: 1;

  flex-direction: column;
  padding: 4px;
  gap: 4px;

  background: ${themeColors.gray["800"]};
  border: 1px solid ${themeColors.gray["700"]};
  box-shadow: 0 32px 64px -16px rgba(0, 0, 0, 0.16);
`;

export const DropdownItem = styled.button.attrs({ type: "button" })<{
  $isSelected: boolean;
}>`
  padding: 8px 12px;
  width: 112px;
  height: 40px;
  text-align: left;

  color: ${themeColors.gray["500"]};
  background: ${themeColors.gray["800"]};

  &:hover {
    background: ${themeColors.gray["700"]};
    color: ${themeColors.white.itself};
  }

  ${({ $isSelected }) => $isSelected && `color: ${themeColors.white.itself}`};
`;
