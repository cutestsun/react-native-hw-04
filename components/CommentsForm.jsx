import { Keyboard, StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";
import { TextInput } from "react-native-paper";
import { SendIcon } from "../components/Icons";
import { colors, commentTheme } from "../utils";

export const CommentsForm = ({ onFocus, onBlur }) => {
  return (
    <>
      <Formik
        initialValues={{ comment: "" }}
        onSubmit={(values, actions) => {
          Keyboard.dismiss();
          console.log(values);
          actions.resetForm();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, dirty }) => (
          <>
            <TextInput
              mode="outlined"
              placeholder="Коментувати..."
              placeholderTextColor={colors.inputPlaceholderColor}
              contentStyle={styles.inputText}
              style={styles.input}
              outlineColor={colors.inputBorderColor}
              activeOutlineColor={colors.inputBorderColor}
              selectionColor={colors.mainAccentColor}
              outlineStyle={{
                borderWidth: 1,
              }}
              theme={commentTheme}
              onChangeText={handleChange("comment")}
              onFocus={onFocus}
              onBlur={() => {
                handleBlur("comment");
                onBlur();
              }}
              value={values.comment}
              right={
                <TextInput.Icon
                  icon={() => (
                    <SendIcon
                      color={!dirty ? colors.secondaryIconColor : "#fff"}
                      backgroundColor={
                        !dirty
                          ? colors.inputBorderColor
                          : colors.mainAccentColor
                      }
                    />
                  )}
                  style={{ marginTop: 14 }}
                  onPress={handleSubmit}
                  disabled={!dirty}
                />
              }
            />
          </>
        )}
      </Formik>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
  },
  inputText: {
    fontSize: 16,
    color: colors.mainTextColor,
    fontFamily: "Roboto-Medium",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    // height: 50,
  },
});
