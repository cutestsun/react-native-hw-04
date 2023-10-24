import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Formik } from "formik";
import { colors, authInputTheme } from "../../utils/variables";
import { useState } from "react";
import { Background } from "../../components/Background/Background";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { loginValidationSchema } from "../../utils/schemas";
import { SubmitBtn } from "../../components/SubmitBtn/SubmitBtn";
import { AuthSwitchBtn } from "../../components/AuthSwitchBtn/AuthSwitchBtn";
import {
  ErrorMessage,
  InputWrapper,
  MainContainer,
  ShowPasswordBtnContainer,
  ShowPasswordBtnText,
  Title,
} from "./LoginScreen.styled";

export const LoginScreen = () => {
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
                <Title>Увійти</Title>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  onSubmit={(values, actions) => {
                    console.log(values);
                    navigation.navigate("Home");
                    actions.resetForm();
                  }}
                  validationSchema={loginValidationSchema}
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
                          <ErrorMessage email={true}>
                            {errors.email}
                          </ErrorMessage>
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
                            <ErrorMessage>{errors.password}</ErrorMessage>
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
                        accessibilityLabel="Log In"
                      >
                        Увійти
                      </SubmitBtn>
                    </>
                  )}
                </Formik>
                <AuthSwitchBtn
                  onPress={() => navigation.navigate("Registration")}
                  accessibilityLabel="Link to Log In page"
                >
                  Немає акаунту? Зареєструватися
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
