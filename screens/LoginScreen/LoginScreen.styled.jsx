import styled from "styled-components/native";
import { colors } from "../../utils";

export const MainContainer = styled.View`
  position: relative;
  background-color: #fff;
  border-radius: 25px 25px 0 0;
  padding: 32px 16px 0;
  padding-bottom: ${({ isOpenKeyboard }) => (isOpenKeyboard ? 10 : 128)}px;
  height: ${({ isOpenKeyboard }) => (isOpenKeyboard ? "330px" : "auto")};
`;

export const Title = styled.Text`
  color: ${colors.mainTextColor};
  text-align: center;
  font-family: "Roboto-Medium";
  font-size: 30px;
  letter-spacing: 0.3px;
  margin-bottom: 25px;
`;

export const InputWrapper = styled.View`
  row-gap: 8px;
  margin-bottom: 43px;
`;

export const ShowPasswordBtnContainer = styled.TouchableOpacity`
  position: absolute;
  top: 6px;
  right: 16px;
  z-index: 1;
  padding-top: 16px;
  padding-bottom: 16px;
  font-family: "Roboto-Regular";
  font-size: 16px;
`;

export const ShowPasswordBtnText = styled.Text`
  color: ${colors.secondaryAccentColor};
  font-family: "Roboto-Regular";
  font-size: 16px;
`;

export const ErrorMessage = styled.Text`
  color: red;
  margin-top: ${({ email }) => (email ? 0 : 8)}px;
  margin-left: 16px;
`;
