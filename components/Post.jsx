import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../utils/variables";
import { LikeIcon, LocationIcon, MessageIcon } from "./Icons";
import { useNavigation } from "@react-navigation/native";

export const Post = ({ image, description, likes, location, comments }) => {
  const navigation = useNavigation();
  // navigation.removeListener

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Comments", { image, comments })}
    >
      <View>
        <Image
          source={image}
          alt={`Photo of ${location}`}
          style={styles.image}
        />
        <Text style={styles.description}>{description}</Text>
        <View style={styles.details}>
          <View style={{ flexDirection: "row", columnGap: 24 }}>
            <View style={styles.detailWrap}>
              <MessageIcon
                color={
                  comments.length
                    ? colors.mainAccentColor
                    : colors.secondaryIconColor
                }
              />
              <Text
                style={{
                  ...styles.commentsQuantity,
                  color: comments.length
                    ? colors.mainTextColor
                    : colors.disabledTextColor,
                }}
              >
                {comments.length}
              </Text>
            </View>
            <View style={styles.detailWrap}>
              <LikeIcon
                color={
                  likes ? colors.mainAccentColor : colors.secondaryIconColor
                }
              />
              <Text>{likes}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{ ...styles.detailWrap, columnGap: 4 }}
            onLongPress={() => console.log("Long press")}
          >
            <LocationIcon />
            <Text style={styles.location}>{location.country}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 8,
    marginBottom: 8,
    width: "100%",
    resizeMode: "cover",
  },
  description: {
    color: colors.mainTextColor,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 8,
  },
  details: {
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
  },
  detailWrap: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
  },
  commentsQuantity: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  location: {
    color: colors.mainTextColor,
    textAlign: "right",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
  },
});
