import {
  Image,
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
import { CommentsForm } from "../components/CommentsForm";
import { CommentsList } from "../components/CommentsList";

export const CommentsScreen = () => {
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);
  const {
    params: { image, comments },
  } = useRoute();
  const { width: windowWidth } = useWindowDimensions();

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
        <View
          style={{
            ...styles.mainContainer,
            paddingBottom:
              Platform.OS === "ios" && isOpenKeyboard && windowWidth >= 414
                ? 122
                : Platform.OS === "ios" && isOpenKeyboard
                ? hp(45) - 265
                : isOpenKeyboard
                ? 86
                : Platform.OS === "ios"
                ? 28
                : 12,
          }}
        >
          <View style={styles.secondContainer}>
            <Image source={image} style={styles.image} />

            <CommentsList isOpenKeyboard={isOpenKeyboard} comments={comments} />
          </View>
          <View>
            <CommentsForm onFocus={onFocus} onBlur={onBlur} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: hp(3.9),
    backgroundColor: "#fff",
  },
  secondContainer: {
    rowGap: hp(3.9),
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 8,
  },
  image: {
    borderRadius: 8,
    width: "100%",
    resizeMode: "cover",
  },
});
