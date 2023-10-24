import styled from "styled-components/native";
import { colors } from "../../utils";

export const BtnContainer = styled.TouchableOpacity`
  padding: 16px;
`;

export const BtnText = styled.Text`
  text-align: center;
  color: ${colors.secondaryAccentColor};
  font-family: "Roboto-Regular";
  font-size: 16px;
  line-height: 19px;
`;
