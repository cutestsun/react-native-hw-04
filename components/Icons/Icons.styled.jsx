import styled from "styled-components/native";
import { colors } from "../../utils";

export const IconContainer = styled.View`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 23px;
  padding-right: 23px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;

  background-color: ${({ focused }) =>
    focused ? colors.mainAccentColor : "transparent"};
`;
