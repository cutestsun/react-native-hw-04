import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { colors } from "../utils/variables";

export const PostsScreen = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <TouchableOpacity style={styles.userCard}>
        <Image
          source={require("../assets/img/user-img.jpg")}
          style={styles.image}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "#fff",
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
