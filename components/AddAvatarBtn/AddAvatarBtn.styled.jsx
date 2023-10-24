import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../utils";

export const AddPhotoBtn = styled.TouchableOpacity`
  position: absolute;
  top: -60px;
  align-self: center;
  width: 120px;
  height: 120px;
  background-color: ${colors.inputBgColor};
  border-radius: 16px;
  overflow: visible;
  z-index: 22;
`;

export const AddPhotoIconWrapper = styled.View`
  border-radius: 50px;
  position: absolute;
  right: -14px;
  bottom: 12px;
  width: 28px;
  height: 28px;
  overflow: hidden;
`;

export const AddPhotoIcon = styled(Ionicons)`
  background-color: #fff;
  position: relative;
  margin-left: -2.1px;
  margin-top: -4.3px;
`;

export const Img = styled.Image`
  border-radius: 16px;
  width: 100%;
  height: 100%;
`;
