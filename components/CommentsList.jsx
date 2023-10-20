import {
  Image,
  Keyboard,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";
import { DateTime } from "luxon";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../utils";
import images from "../assets/img/user-images/images";

export const CommentsList = ({ isOpenKeyboard, comments }) => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  return (
    <>
      <View
        style={{
          height:
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
              : hp(45) - 22,
        }}
      >
        <ScrollView style={{ flex: 1 }}>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View style={styles.commentsContainer}>
              {comments.map((comment) => {
                const parsedDateTime = DateTime.fromISO(comment.createdAt, {
                  locale: "ua",
                });
                const concatenatedAuthorName = comment.author
                  .split(" ")
                  .join("");

                return (
                  <View
                    key={comment.id}
                    style={{
                      ...styles.comment,
                      flexDirection:
                        comment.author.toLowerCase() ===
                        "Natali Romanova".toLowerCase()
                          ? "row-reverse"
                          : "row",
                    }}
                  >
                    <Image
                      source={images[concatenatedAuthorName]}
                      style={styles.avatar}
                    />
                    <View style={styles.commentTextWrapper}>
                      <Text style={styles.commentText}>{comment.content}</Text>
                      <Text style={styles.commentDate}>
                        {parsedDateTime.toFormat("dd MMMM, yyyy | HH:mm")}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  commentsContainer: {
    rowGap: 32,
    columnGap: 32,
  },
  comment: {
    columnGap: 16,
  },
  commentText: {
    color: colors.mainTextColor,
    fontFamily: "Roboto-Regular",
    fontSize: wp(3.6),
    lineHeight: 18,
  },
  commentDate: {
    color: colors.disabledTextColor,
    textAlign: "right",
    fontFamily: "Roboto-Regular",
    fontSize: wp(2.8),
    lineHeight: 12,
  },
  commentTextWrapper: {
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 8,
    borderTopLeftRadius: 0,
    flex: 1,
    rowGap: 8,
  },
  avatar: {
    width: 28,
    height: 28,
    resizeMode: "center",
    borderRadius: 50,
  },
});
