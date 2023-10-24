import { StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../utils";
import { CameraIcon } from "../Icons/Icons";
import {
  AddPhotoWrapper,
  CameraIconWrapper,
} from "./PostPhotoChooseBtn.styled";

export const PostPhotoChooseBtn = () => {
  return (
    <>
      <AddPhotoWrapper>
        <CameraIconWrapper>
          <CameraIcon />
        </CameraIconWrapper>
      </AddPhotoWrapper>
    </>
  );
};
