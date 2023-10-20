import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { colors } from "../utils/variables";
import { Post } from "../components/Post";

import postsData from "posts.json";
import images from "../assets/img/post-images/images";

export const PostsScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.userCard}>
          <Image
            source={require("assets/img/user-images/user-img_NataliRomanova.jpg")}
            style={styles.image}
          />
          <View style={styles.userInfo}>
            <Text style={styles.name}>Natali Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>
          </View>
        </TouchableOpacity>
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
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    rowGap: 32,
    paddingTop: 32,
    paddingBottom: 44,
  },
  userCard: {
    flexDirection: "row",
    columnGap: 12,
  },
  image: {
    borderRadius: 16,
    width: 60,
    height: 60,
  },
  userInfo: {
    justifyContent: "center",
    rowGap: 4,
  },
  name: {
    color: colors.mainTextColor,
    fontFamily: "Roboto-Bold",
    fontSize: 15,
    lineHeight: 15,
  },
  email: {
    color: "rgba(33, 33, 33, 0.80)",
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 13,
  },
});
