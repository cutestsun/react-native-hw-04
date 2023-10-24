import { Dimensions, Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styled from "styled-components/native";
import { colors } from "../../utils";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const MainContainer = styled.View`
  height: ${({ isOpenKeyboard }) =>
    Platform.OS === "ios" && isOpenKeyboard && windowWidth >= 414
      ? hp(40)
      : isOpenKeyboard && windowWidth >= 414
      ? hp(40) + 20
      : Platform.OS === "ios" && isOpenKeyboard
      ? hp(37)
      : isOpenKeyboard
      ? hp(37) + 70
      : Platform.OS === "ios" && windowWidth >= 414
      ? windowHeight - 512
      : Platform.OS === "ios"
      ? hp(45) - 40
      : hp(45) - 22}px;
`;

export const CommentsContainer = styled.View`
  row-gap: 32px;
  column-gap: 32px;
`;

export const Comment = styled.View`
  column-gap: 16px;
  flex-direction: ${({ isThePersonalComment }) =>
    isThePersonalComment ? "row-reverse" : "row"};
`;

export const CommentText = styled.Text`
  color: ${colors.mainTextColor};
  font-family: "Roboto-Regular";
  font-size: ${wp(3.6)}px;
  line-height: ${wp(3.6) + 2}px;
`;

export const CommentDate = styled.Text`
  color: ${colors.disabledTextColor};
  text-align: right;
  font-family: "Roboto-Regular";
  font-size: ${wp(2.8)}px;
  line-height: ${wp(2.8) + 2}px;
`;

export const CommentTextWrapper = styled.View`
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  border-top-left-radius: 0px;
  flex: 1;
  row-gap: 8px;
`;

export const Avatar = styled.Image`
  width: 28px;
  height: 28px;
  border-radius: 50px;
`;
