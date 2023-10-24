import styled from "styled-components/native";
import { colors } from "../../utils";

export const Image = styled.Image`
  border-radius: 8px;
  margin-bottom: 8px;
  width: 100%;
`;

export const Description = styled.Text`
  color: ${colors.mainTextColor};
  font-family: "Roboto-Medium";
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 8px;
`;

export const MainDetailsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SecondDetailsContainer = styled.View`
  flex-direction: row;
  column-gap: 24px;
`;

export const DetailWrap = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 6px;
`;

export const DetailQuantity = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 16px;
  line-height: 19px;
  color: ${({ isDisabled }) =>
    isDisabled ? colors.disabledTextColor : colors.mainTextColor};
`;

export const LocationText = styled.Text`
  color: ${colors.mainTextColor};
  text-align: right;
  font-family: "Roboto-Regular";
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;
`;

export const LocationTextWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  column-gap: 4px;
`;
