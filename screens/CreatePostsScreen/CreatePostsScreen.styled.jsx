import styled from "styled-components/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { colors } from "../../utils";

export const MainContainer = styled.View`
  position: relative;
  background-color: #fff;
  padding: 32px 16px 34px;
  flex: 1;
  justify-content: flex-end;
  padding-bottom: ${({ isOpenKeyboard }) =>
    isOpenKeyboard ? hp(40) - 220 : 34}px;
`;

export const PhotoCaption = styled.Text`
  color: ${colors.inputPlaceholderColor};
  font-family: "Roboto-Regular";
  font-size: 16px;
  line-height: 19px;
`;

export const PhotoSectionWrapper = styled.View`
  margin-bottom: 32px;
`;
