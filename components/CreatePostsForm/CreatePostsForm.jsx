import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { colors, createPostInputTheme } from "../../utils";
import { SubmitBtn } from "../SubmitBtn/SubmitBtn";
import { LocationIcon, TrashIcon } from "../Icons/Icons";
import {
  DeleteBtn,
  Input,
  LocationIconWrapper,
} from "./CreatePostsForm.styled";

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
            <Input
              mode="flat"
              placeholder="Назва..."
              placeholderTextColor={colors.inputPlaceholderColor}
              contentStyle={styles.inputText}
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
              <Input
                mode="flat"
                placeholder="Місцевість..."
                placeholderTextColor={colors.inputPlaceholderColor}
                contentStyle={{
                  ...styles.inputText,
                  paddingLeft: 28,
                }}
                style={{
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
              <LocationIconWrapper>
                <LocationIcon />
              </LocationIconWrapper>
            </View>
            <SubmitBtn
              onPress={handleSubmit}
              accessibilityLabel="Publish"
              disabled={!dirty}
            >
              Опублікувати
            </SubmitBtn>

            <View style={{ flex: 1 }} />

            <DeleteBtn onPress={resetForm} disabled={!dirty} dirty={dirty}>
              <TrashIcon color={!dirty ? colors.secondaryIconColor : "#fff"} />
            </DeleteBtn>
          </>
        )}
      </Formik>
    </>
  );
};

const styles = StyleSheet.create({
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
});
