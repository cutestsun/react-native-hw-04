import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { StatusBar } from "expo-status-bar";
import { CameraIcon, LocationIcon, TrashIcon } from "../components/Icons";
import { colors, createPostInputTheme } from "../utils/variables";
import { SubmitBtn } from "../components/SubmitBtn";

export const CreatePostsScreen = () => {
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

  const navigation = useNavigation();

  const onFocus = () => {
    setIsOpenKeyboard(true);
  };

  const onBlur = () => {
    setIsOpenKeyboard(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flex: 1,
              // justifyContent: isOpenKeyboard ? "flex-end" : "flex-start",
              // justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                ...styles.mainContainer,
                // paddingBottom: isOpenKeyboard ? 10 : 78,
                // height: isOpenKeyboard ? 370 : "auto",
              }}
            >
              <TouchableOpacity style={{ marginBottom: 32 }}>
                <View style={styles.addPhotoWrapper}>
                  <View style={styles.cameraIconWrapper}>
                    <CameraIcon />
                  </View>
                </View>
                <Text style={styles.photoCaption}>Завантажте фото</Text>
              </TouchableOpacity>
              <Formik
                initialValues={{ title: "", location: "" }}
                onSubmit={(values, actions) => {
                  console.log(values);
                  actions.resetForm();
                  navigation.navigate("Posts");
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  dirty,
                  resetForm,
                }) => (
                  <>
                    <TextInput
                      mode="flat"
                      placeholder="Назва..."
                      placeholderTextColor={colors.inputPlaceholderColor}
                      contentStyle={styles.inputText}
                      style={styles.input}
                      underlineColor={colors.inputBorderColor}
                      value={values.title}
                      onChangeText={handleChange("title")}
                      onFocus={onFocus}
                      onBlur={() => {
                        handleBlur("title");
                        onBlur();
                      }}
                      theme={createPostInputTheme}
                    />
                    <View style={{ position: "relative" }}>
                      <TextInput
                        mode="flat"
                        placeholder="Місцевість..."
                        placeholderTextColor={colors.inputPlaceholderColor}
                        contentStyle={{
                          ...styles.inputText,
                          paddingLeft: 28,
                        }}
                        style={{
                          ...styles.input,
                          marginBottom: 32,
                        }}
                        underlineColor={colors.inputBorderColor}
                        value={values.location}
                        onChangeText={handleChange("location")}
                        onFocus={onFocus}
                        onBlur={() => {
                          handleBlur("location");
                          onBlur();
                        }}
                        theme={createPostInputTheme}
                      />
                      <View style={styles.locationIconWrapper}>
                        <LocationIcon />
                      </View>
                    </View>
                    <SubmitBtn
                      onPress={handleSubmit}
                      accessibilityLabel="Publish"
                      disabled={!dirty}
                    >
                      Опублікувати
                    </SubmitBtn>
                    <TouchableOpacity
                      onPress={resetForm}
                      style={{
                        ...styles.deleteBtn,
                        backgroundColor: !dirty
                          ? colors.disabledBgColor
                          : colors.mainAccentColor,
                      }}
                      disabled={!dirty}
                    >
                      <TrashIcon
                        color={!dirty ? colors.secondaryIconColor : "#fff"}
                      />
                    </TouchableOpacity>
                  </>
                )}
              </Formik>
            </View>
          </View>
          <StatusBar style="auto" />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    position: "relative",
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingBottom: 34,
    paddingLeft: 16,
    paddingRight: 16,
    // marginBottom: 100,
    flex: 1,
  },
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
  input: {
    height: 50,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  inputText: {
    fontSize: 16,
    color: colors.mainTextColor,
    fontFamily: "Roboto-Regular",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1.5,
    borderBottomColor: colors.inputBorderColor,
    paddingLeft: 0,
  },
  locationIconWrapper: {
    position: "absolute",
    top: 13,
    left: 0,
  },
  deleteBtn: {
    borderRadius: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 23,
    paddingRight: 23,
    alignSelf: "center",
    marginTop: "auto",
  },
});
