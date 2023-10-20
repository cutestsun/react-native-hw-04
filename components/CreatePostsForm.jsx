import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { TextInput } from "react-native-paper";
import { colors, createPostInputTheme } from "../utils";
import { SubmitBtn } from "./SubmitBtn";
import { LocationIcon, TrashIcon } from "./Icons";

export const CreatePostsForm = ({ onFocus, onBlur }) => {
  const navigation = useNavigation();

  return (
    <>
      <Formik
        initialValues={{ title: "", location: "" }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
          navigation.navigate("Posts");
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          dirty,
          resetForm,
        }) => (
          <>
            <TextInput
              mode="flat"
              placeholder="Назва..."
              placeholderTextColor={colors.inputPlaceholderColor}
              contentStyle={styles.inputText}
              style={styles.input}
              underlineColor={colors.inputBorderColor}
              value={values.title}
              onChangeText={handleChange("title")}
              onFocus={onFocus}
              onBlur={() => {
                handleBlur("title");
                onBlur();
              }}
              theme={createPostInputTheme}
            />
            <View style={{ position: "relative" }}>
              <TextInput
                mode="flat"
                placeholder="Місцевість..."
                placeholderTextColor={colors.inputPlaceholderColor}
                contentStyle={{
                  ...styles.inputText,
                  paddingLeft: 28,
                }}
                style={{
                  ...styles.input,
                  marginBottom: 32,
                }}
                underlineColor={colors.inputBorderColor}
                value={values.location}
                onChangeText={handleChange("location")}
                onFocus={onFocus}
                onBlur={() => {
                  handleBlur("location");
                  onBlur();
                }}
                theme={createPostInputTheme}
              />
              <View style={styles.locationIconWrapper}>
                <LocationIcon />
              </View>
            </View>
            <SubmitBtn
              onPress={handleSubmit}
              accessibilityLabel="Publish"
              disabled={!dirty}
            >
              Опублікувати
            </SubmitBtn>

            <View style={{ flex: 1 }} />

            <TouchableOpacity
              onPress={resetForm}
              style={{
                ...styles.deleteBtn,
                backgroundColor: !dirty
                  ? colors.disabledBgColor
                  : colors.mainAccentColor,
              }}
              disabled={!dirty}
            >
              <TrashIcon color={!dirty ? colors.secondaryIconColor : "#fff"} />
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  inputText: {
    fontSize: 16,
    color: colors.mainTextColor,
    fontFamily: "Roboto-Regular",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1.5,
    borderBottomColor: colors.inputBorderColor,
    paddingLeft: 0,
  },
  locationIconWrapper: {
    position: "absolute",
    top: 13,
    left: 0,
  },
  deleteBtn: {
    position: "absolute",
    bottom: 34,
    borderRadius: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 23,
    paddingRight: 23,
    alignSelf: "center",
  },
});
