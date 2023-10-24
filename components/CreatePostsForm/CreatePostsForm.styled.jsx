import { TextInput } from "react-native-paper";
import styled from "styled-components/native";
import { colors } from "../../utils";

export const Input = styled(TextInput)`
  height: 50px;
  margin-bottom: 26px;
  background-color: #fff;
`;

export const LocationIconWrapper = styled.View`
  position: absolute;
  top: 13px;
  left: 0;
`;

export const DeleteBtn = styled.TouchableOpacity`
  position: absolute;
  bottom: 34px;
  border-radius: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 23px;
  padding-right: 23px;
  align-self: center;
  background-color: ${({ dirty }) =>
    !dirty ? colors.disabledBgColor : colors.mainAccentColor};
`;
