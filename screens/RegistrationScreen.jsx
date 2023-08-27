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
import { Ionicons } from "@expo/vector-icons";
import { colors, authInputTheme } from "../utils/variables";
import { Background } from "../components/Background";
import { SubmitBtn } from "../components/SubmitBtn";
import { registrationValidationSchema } from "../utils/schemas";
import { AuthSwitchBtn } from "../components/AuthSwitchBtn";

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
              <View
                style={{
                  ...styles.mainContainer,
                  paddingBottom: isOpenKeyboard ? 10 : 78,
                  height: isOpenKeyboard ? 370 : "auto",
                }}
              >
                <TouchableOpacity
                  // onPress={}
                  style={styles.addPhotoBtn}
                  accessibilityLabel="Add photo"
                >
                  <View style={styles.addPhotoIconWrapper}>
                    <Ionicons
                      name="add-circle-outline"
                      size={34}
                      color={colors.mainAccentColor}
                      style={styles.addPhotoIcon}
                    />
                  </View>
                </TouchableOpacity>
                <Text style={styles.title}>Реєстрація</Text>
                <Formik
                  initialValues={{ name: "", email: "", password: "" }}
                  onSubmit={(values, actions) => {
                    console.log(values);
                    actions.resetForm();
                    navigation.navigate("Home");
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
                      <View style={styles.inputWrapper}>
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
                          contentStyle={styles.input}
                        />
                        {touched.name && errors.name && (
                          <Text style={{ color: "red", marginLeft: 16 }}>
                            {errors.name}
                          </Text>
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
                          contentStyle={styles.input}
                        />
                        {touched.email && errors.email && (
                          <Text style={{ color: "red", marginLeft: 16 }}>
                            {errors.email}
                          </Text>
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
                            contentStyle={styles.input}
                          />
                          {touched.password && errors.password && (
                            <Text
                              style={{
                                color: "red",
                                marginTop: 8,
                                marginLeft: 16,
                              }}
                            >
                              {errors.password}
                            </Text>
                          )}
                          <TouchableOpacity
                            onPress={() =>
                              setIsVisiblePassword((prevState) => !prevState)
                            }
                            style={styles.showPasswordBtnContainer}
                            accessibilityLabel="Show or hide password"
                          >
                            <Text style={styles.showPasswordBtnText}>
                              {isVisiblePassword ? "Показати" : "Сховати"}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
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
              </View>
            </View>
          </KeyboardAvoidingView>
        </Background>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    position: "relative",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
  },

  addPhotoBtn: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
    width: 120,
    height: 120,
    backgroundColor: colors.inputBgColor,
    borderRadius: 16,
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
    marginLeft: -2,
    marginTop: -4.2,
  },
  title: {
    color: colors.mainTextColor,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    letterSpacing: 0.3,
    marginBottom: 25,
  },
  input: {
    fontSize: 16,
    color: colors.mainTextColor,
    fontFamily: "Roboto-Regular",
    height: 50,
  },
  inputWrapper: {
    rowGap: 8,
    marginBottom: 43,
  },
  showPasswordBtnContainer: {
    position: "absolute",
    zIndex: 1,
    right: 16,
    top: 6,
    paddingTop: 16,
    paddingBottom: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  showPasswordBtnText: {
    color: colors.secondaryAccentColor,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});
