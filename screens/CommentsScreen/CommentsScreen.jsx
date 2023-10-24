import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useRoute } from "@react-navigation/native";
import { CommentsForm } from "../../components/CommentsForm/CommentsForm";
import { CommentsList } from "../../components/CommentsList/CommentsList";
import { Image, MainContainer, SecondContainer } from "./CommentsScreen.styled";

export const CommentsScreen = () => {
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);
  const {
    params: { image, comments },
  } = useRoute();

  const onFocus = () => {
    setIsOpenKeyboard(true);
  };

  const onBlur = () => {
    setIsOpenKeyboard(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <MainContainer isOpenKeyboard={isOpenKeyboard}>
          <SecondContainer>
            <Image source={image} resizeMode="cover" />

            <CommentsList isOpenKeyboard={isOpenKeyboard} comments={comments} />
          </SecondContainer>
          <View>
            <CommentsForm onFocus={onFocus} onBlur={onBlur} />
          </View>
        </MainContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
