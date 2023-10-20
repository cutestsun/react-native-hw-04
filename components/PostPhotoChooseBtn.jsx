import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../utils";
import { CameraIcon } from "./Icons";

export const PostPhotoChooseBtn = () => {
  return (
    <>
      <TouchableOpacity style={{ marginBottom: 32 }}>
        <View style={styles.addPhotoWrapper}>
          <View style={styles.cameraIconWrapper}>
            <CameraIcon />
          </View>
        </View>
        <Text style={styles.photoCaption}>Завантажте фото</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  addPhotoWrapper: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.inputBorderColor,
    backgroundColor: colors.inputBgColor,
    justifyContent: "center",
    alignItems: "center",
    height: 240,
    marginBottom: 8,
  },
  cameraIconWrapper: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  photoCaption: {
    color: colors.inputPlaceholderColor,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
});
