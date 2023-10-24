import { Keyboard, ScrollView, TouchableWithoutFeedback } from "react-native";
import { DateTime } from "luxon";
import images from "assets/img/user-images/images";
import {
  Avatar,
  Comment,
  CommentDate,
  CommentText,
  CommentTextWrapper,
  CommentsContainer,
  MainContainer,
} from "./CommentsList.styled";

export const CommentsList = ({ isOpenKeyboard, comments }) => {
  return (
    <>
      <MainContainer isOpenKeyboard={isOpenKeyboard}>
        <ScrollView style={{ flex: 1 }}>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <CommentsContainer>
              {comments.map((comment) => {
                const parsedDateTime = DateTime.fromISO(comment.createdAt, {
                  locale: "ua",
                });
                const concatenatedAuthorName = comment.author
                  .split(" ")
                  .join("");

                return (
                  <Comment
                    key={comment.id}
                    isThePersonalComment={
                      comment.author.toLowerCase() ===
                      "Natali Romanova".toLowerCase()
                    }
                  >
                    <Avatar
                      source={images[concatenatedAuthorName]}
                      resizeMode="center"
                    />
                    <CommentTextWrapper>
                      <CommentText>{comment.content}</CommentText>
                      <CommentDate>
                        {parsedDateTime.toFormat("dd MMMM, yyyy | HH:mm")}
                      </CommentDate>
                    </CommentTextWrapper>
                  </Comment>
                );
              })}
            </CommentsContainer>
          </TouchableWithoutFeedback>
        </ScrollView>
      </MainContainer>
    </>
  );
};
