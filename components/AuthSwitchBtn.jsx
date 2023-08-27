import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../utils/variables";

export const AuthSwitchBtn = ({ children, ...props }) => {
  return (
    <TouchableOpacity {...props} style={styles.btnContainer}>
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    padding: 16,
  },
  btnText: {
    textAlign: "center",
    color: colors.secondaryAccentColor,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
});
