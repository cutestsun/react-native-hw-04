import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { CreatePostsForm } from "../../components/CreatePostsForm/CreatePostsForm";
import { PostPhotoChooseBtn } from "../../components/PostPhotoChooseBtn/PostPhotoChooseBtn";
import {
  MainContainer,
  PhotoCaption,
  PhotoSectionWrapper,
} from "./CreatePostsScreen.styled";

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
          <MainContainer isOpenKeyboard={isOpenKeyboard}>
            <PhotoSectionWrapper>
              <PostPhotoChooseBtn />
              <PhotoCaption>Завантажте фото</PhotoCaption>
            </PhotoSectionWrapper>
            <CreatePostsForm onBlur={onBlur} onFocus={onFocus} />
          </MainContainer>

          <StatusBar style="auto" />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
