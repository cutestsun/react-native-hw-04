import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../utils/variables";

export const SubmitBtn = ({ children, disabled, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      style={{
        ...styles.btnContainer,
        backgroundColor: disabled
          ? colors.disabledBgColor
          : colors.mainAccentColor,
      }}
    >
      <Text
        style={{
          ...styles.btnText,
          color: disabled ? colors.disabledTextColor : "#fff",
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    padding: 16,
    borderRadius: 100,
  },

  btnText: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});
