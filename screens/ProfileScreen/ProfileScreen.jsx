import { ScrollView, StyleSheet, View } from "react-native";
import { Background } from "../../components/Background/Background";
import { AddAvatarBtn } from "../../components/AddAvatarBtn/AddAvatarBtn";
import { LogoutBtn } from "../../components/LogoutBtn/LogoutBtn";
import { colors } from "../../utils";
import postsData from "posts.json";
import images from "../../assets/img/post-images/images";
import { Post } from "../../components/Post/Post";
import { MainContainer, Username } from "./ProfileScreen.styled";

export const ProfileScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Background>
        <ScrollView style={{ flex: 1 }}>
          <MainContainer>
            <AddAvatarBtn
              avatar={require("assets/img/user-images/user-img_NataliRomanova.jpg")}
            />
            <LogoutBtn profile={true} />
            <Username>Natali Romanova</Username>
            {postsData.map(({ id, content, likes, location, comments }) => {
              return (
                <Post
                  key={id}
                  image={images[id]}
                  description={content}
                  likes={likes}
                  location={location}
                  comments={comments}
                />
              );
            })}
          </MainContainer>
        </ScrollView>
      </Background>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    flex: 1,
    position: "relative",
    paddingTop: 92,
    paddingBottom: 44,
    paddingHorizontal: 16,
    rowGap: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    marginTop: 148,
    zIndex: 100,
  },
  logoutBtn: {
    position: "absolute",
    right: 16,
    top: 22,
  },
  username: {
    color: colors.mainTextColor,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.3,
  },
});
