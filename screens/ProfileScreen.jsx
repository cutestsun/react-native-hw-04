import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Background } from "../components/Background";
import { AddAvatarBtn } from "../components/AddAvatarBtn";
import { LogoutBtn } from "../components/LogoutBtn";
import { colors } from "../utils";
import postsData from "posts.json";
import images from "../assets/img/post-images/images";
import { Post } from "../components/Post";

export const ProfileScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Background>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.mainContainer}>
            <AddAvatarBtn
              avatar={require("assets/img/user-images/user-img_NataliRomanova.jpg")}
            />
            <LogoutBtn style={styles.logoutBtn} />
            <Text style={styles.username}>Natali Romanova</Text>
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
          </View>
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
