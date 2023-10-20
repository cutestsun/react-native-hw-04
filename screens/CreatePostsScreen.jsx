import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { CreatePostsForm } from "../components/CreatePostsForm";
import { PostPhotoChooseBtn } from "../components/PostPhotoChooseBtn";

export const CreatePostsScreen = () => {
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

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
              ...styles.mainContainer,
              paddingBottom: isOpenKeyboard ? hp(40) - 220 : 34,
              justifyContent: "flex-end",
            }}
          >
            <PostPhotoChooseBtn />

            <CreatePostsForm onBlur={onBlur} onFocus={onFocus} />
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
    paddingHorizontal: 16,
    flex: 1,
  },
});
