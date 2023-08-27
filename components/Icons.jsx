import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../utils/variables";

export const TabBarIcon = ({ focused, name }) => {
  return (
    <View
      style={{
        ...styles.iconContainer,
        backgroundColor: focused ? colors.mainAccentColor : "transparent",
      }}
    >
      <Feather
        name={name}
        size={24}
        color={focused ? "#fff" : colors.mainIconColor}
      />
    </View>
  );
};

export const LogOutIcon = () => {
  return (
    <Feather
      name="log-out"
      size={24}
      color={colors.secondaryIconColor}
      style={{ marginRight: 16 }}
    />
  );
};

export const ArrowLeftIcon = () => {
  return (
    <Feather
      name="arrow-left"
      size={24}
      color={colors.mainIconColor}
      style={{ marginLeft: 16 }}
    />
  );
};

export const CameraIcon = () => {
  return (
    <FontAwesome name="camera" size={24} color={colors.secondaryIconColor} />
  );
};

export const LocationIcon = () => {
  return <Feather name="map-pin" size={24} color={colors.secondaryIconColor} />;
};

export const TrashIcon = ({ color }) => {
  return <Feather name="trash-2" size={24} color={color} />;
};

const styles = StyleSheet.create({
  iconContainer: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 23,
    paddingRight: 23,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
