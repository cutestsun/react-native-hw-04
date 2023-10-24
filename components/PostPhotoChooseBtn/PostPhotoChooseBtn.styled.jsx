import styled from "styled-components/native";
import { colors } from "../../utils";

export const AddPhotoWrapper = styled.View`
  border-radius: 8px;
  border: 1px solid ${colors.inputBorderColor};
  background-color: ${colors.inputBgColor};
  justify-content: center;
  align-items: center;
  height: 240px;
  margin-bottom: 8px;
`;

export const CameraIconWrapper = styled.View`
  background-color: #fff;
  border-radius: 50px;
  padding: 18px;
  justify-content: center;
  align-items: center;
`;
