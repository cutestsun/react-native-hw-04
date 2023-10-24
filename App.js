import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  CommentsScreen,
  Home,
  LoginScreen,
  RegistrationScreen,
} from "./screens";
import { colors, hasDynamicIsland } from "./utils";

import { BackBtn } from "./components/BackBtn/BackBtn";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.otf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.otf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            gestureEnabled: true,
            headerShown: true,
            headerStyle: {
              borderBottomWidth: 1,
              borderColor: "rgba(0, 0, 0, 0.30)",
              height:
                Platform.OS === "ios" ? (hasDynamicIsland ? 108 : 88) : 72,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: colors.mainTextColor,
              fontFamily: "Roboto-Medium",
              fontSize: 17,
              lineHeight: 22,
              letterSpacing: -0.408,
            },
            headerLeft: () => <BackBtn />,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
