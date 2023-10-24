import { Keyboard } from "react-native";
import { Formik } from "formik";
import { SendIcon } from "../Icons/Icons";
import { colors, commentTheme } from "../../utils";
import { Input } from "./CommentsForm.styled";

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
            <Input
              mode="outlined"
              placeholder="Коментувати..."
              placeholderTextColor={colors.inputPlaceholderColor}
              contentStyle={{
                fontSize: 16,
                color: colors.mainTextColor,
                fontFamily: "Roboto-Medium",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
              }}
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
                <Input.Icon
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
