import { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils";

export const AddAvatarBtn = ({ avatar }) => {
  const [isPhotoAdded, setIsPhotoAdded] = useState(false);

  useEffect(() => {
    if (avatar) {
      setIsPhotoAdded(true);
    }
  }, [avatar]);

  return (
    <TouchableOpacity
      // onPress={}
      style={styles.addPhotoBtn}
      accessibilityLabel="Add photo"
    >
      {isPhotoAdded && (
        <Image style={styles.image} source={avatar} resizeMode="cover" />
      )}
      <View style={styles.addPhotoIconWrapper}>
        <Ionicons
          name={isPhotoAdded ? "close-circle-outline" : "add-circle-outline"}
          size={34.5}
          color={
            isPhotoAdded ? colors.secondaryIconColor : colors.mainAccentColor
          }
          style={styles.addPhotoIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addPhotoBtn: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
    width: 120,
    height: 120,
    backgroundColor: colors.inputBgColor,
    borderRadius: 16,
    overflow: "visible",
    zIndex: 222,
  },
  addPhotoIconWrapper: {
    borderRadius: 50,
    position: "absolute",
    right: -14,
    bottom: 12,
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  addPhotoIcon: {
    backgroundColor: "#fff",
    position: "relative",
    marginLeft: -2.1,
    marginTop: -4.3,
  },
  image: {
    borderRadius: 16,
    width: "100%",
    height: "100%",
  },
});
