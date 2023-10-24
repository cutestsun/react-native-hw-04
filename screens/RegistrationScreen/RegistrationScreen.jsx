import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import { Formik } from "formik";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { colors, authInputTheme } from "../../utils/variables";
import { Background } from "../../components/Background/Background";
import { SubmitBtn } from "../../components/SubmitBtn/SubmitBtn";
import { registrationValidationSchema } from "../../utils/schemas";
import { AuthSwitchBtn } from "../../components/AuthSwitchBtn/AuthSwitchBtn";
import { AddAvatarBtn } from "../../components/AddAvatarBtn/AddAvatarBtn";
import {
  ErrorMessage,
  InputWrapper,
  MainContainer,
  ShowPasswordBtnContainer,
  ShowPasswordBtnText,
  Title,
} from "./RegistrationScreen.styled";

export const RegistrationScreen = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

  const navigation = useNavigation();

  const onFocus = () => {
    setIsOpenKeyboard(true);
  };

  const onBlur = () => {
    setIsOpenKeyboard(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <Background>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <MainContainer isOpenKeyboard={isOpenKeyboard}>
                <AddAvatarBtn />
                <Title>Реєстрація</Title>
                <Formik
                  initialValues={{ name: "", email: "", password: "" }}
                  onSubmit={(values, actions) => {
                    console.log(values);
                    navigation.navigate("Home");
                    actions.resetForm();
                  }}
                  validationSchema={registrationValidationSchema}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                  }) => (
                    <>
                      <InputWrapper>
                        <TextInput
                          // placeholder="Логін"
                          // placeholderTextColor={colors.inputPlaceholderColor}
                          value={values.name}
                          onChangeText={handleChange("name")}
                          onFocus={onFocus}
                          onBlur={() => {
                            handleBlur("name");
                            onBlur();
                          }}
                          mode="outlined"
                          label="Логін"
                          outlineColor={colors.inputBorderColor}
                          outlineStyle={{ borderWidth: 1 }}
                          theme={authInputTheme}
                          contentStyle={styles.inputText}
                        />
                        {touched.name && errors.name && (
                          <ErrorMessage>{errors.name}</ErrorMessage>
                        )}
                        <TextInput
                          // placeholder="Адреса електронної пошти"
                          // placeholderTextColor={colors.inputPlaceholderColor}
                          keyboardType="email-address"
                          autoCapitalize="none"
                          value={values.email}
                          onChangeText={handleChange("email")}
                          onFocus={onFocus}
                          onBlur={() => {
                            handleBlur("email");
                            onBlur();
                          }}
                          mode="outlined"
                          label="Адреса електронної пошти"
                          outlineColor={colors.inputBorderColor}
                          outlineStyle={{ borderWidth: 1 }}
                          theme={authInputTheme}
                          contentStyle={styles.inputText}
                        />
                        {touched.email && errors.email && (
                          <ErrorMessage>{errors.email}</ErrorMessage>
                        )}
                        <View style={{ position: "relative" }}>
                          <TextInput
                            // placeholder="Пароль"
                            // placeholderTextColor={colors.inputPlaceholderColor}
                            secureTextEntry={isVisiblePassword}
                            value={values.password}
                            onChangeText={handleChange("password")}
                            onFocus={onFocus}
                            onBlur={() => {
                              handleBlur("password");
                              onBlur();
                            }}
                            mode="outlined"
                            label="Пароль"
                            outlineColor={colors.inputBorderColor}
                            outlineStyle={{ borderWidth: 1 }}
                            theme={authInputTheme}
                            contentStyle={styles.inputText}
                          />
                          {touched.password && errors.password && (
                            <ErrorMessage password={true}>
                              {errors.password}
                            </ErrorMessage>
                          )}
                          <ShowPasswordBtnContainer
                            onPress={() =>
                              setIsVisiblePassword((prevState) => !prevState)
                            }
                            accessibilityLabel="Show or hide password"
                          >
                            <ShowPasswordBtnText>
                              {isVisiblePassword ? "Показати" : "Сховати"}
                            </ShowPasswordBtnText>
                          </ShowPasswordBtnContainer>
                        </View>
                      </InputWrapper>
                      <SubmitBtn
                        onPress={handleSubmit}
                        accessibilityLabel="Sign Up"
                      >
                        Зареєструватися
                      </SubmitBtn>
                    </>
                  )}
                </Formik>

                <AuthSwitchBtn
                  onPress={() => navigation.navigate("Login")}
                  accessibilityLabel="Link to Log In page"
                >
                  Вже є акаунт? Увійти
                </AuthSwitchBtn>
              </MainContainer>
            </View>
          </KeyboardAvoidingView>
        </Background>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inputText: {
    fontSize: 16,
    color: colors.mainTextColor,
    fontFamily: "Roboto-Regular",
    height: 50,
  },
});
