import styled from "styled-components/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Dimensions, Platform } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const MainContainer = styled.View`
  flex: 1;
  padding: ${hp(3.9)}px 16px 0;
  background-color: #fff;
  padding-bottom: ${({ isOpenKeyboard }) =>
    Platform.OS === "ios" && isOpenKeyboard && windowWidth >= 414
      ? 122
      : Platform.OS === "ios" && isOpenKeyboard
      ? hp(45) - 265
      : isOpenKeyboard
      ? 86
      : Platform.OS === "ios"
      ? 28
      : 12}px;
`;

export const SecondContainer = styled.View`
  flex: 1;
  row-gap: ${hp(3.9)}px;
  justify-content: flex-end;
  margin-bottom: 8px;
`;

export const Image = styled.Image`
  border-radius: 8px;
  width: 100%;
`;
