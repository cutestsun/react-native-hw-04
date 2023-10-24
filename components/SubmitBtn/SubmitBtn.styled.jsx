import styled from "styled-components/native";
import { colors } from "../../utils";

export const BtnContainer = styled.TouchableOpacity`
  padding: 16px;
  border-radius: 100px;
  background-color: ${colors.mainAccentColor};
`;

export const BtnText = styled.Text`
  text-align: center;
  font-family: "Roboto-Regular";
  font-size: 16px;
  color: #fff;
`;
