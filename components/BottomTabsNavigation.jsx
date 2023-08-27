import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Device from "expo-device";
import { colors } from "../utils/variables";
import { ArrowLeftIcon, LogOutIcon, TabBarIcon } from "../components/Icons";
import { CreatePostsScreen, PostsScreen, ProfileScreen } from "../screens";

const Tab = createBottomTabNavigator();

export const HomeTabsNavigation = () => {
  const iphones = [
    "iPhone15,2", // 14 Pro
    "iPhone15,3", // 14 Pro Max
    "arm64", //for simulator
  ];

  const isIphoneWithDynamicIsland = iphones.includes(Device.modelId);

  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: Platform.OS === "ios" ? 8 : null,
          height: Platform.OS === "ios" ? 88 : 60,
          paddingLeft: 30,
          paddingRight: 30,
          alignItems: "center",
          justifyContent: "center",
        },
        headerStyle: {
          borderBottomWidth: 1,
          borderColor: "rgba(0, 0, 0, 0.30)",
          height:
            Platform.OS === "ios" ? (isIphoneWithDynamicIsland ? 108 : 88) : 72,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: colors.mainTextColor,
          fontFamily: "Roboto-Medium",
          fontSize: 17,
          lineHeight: 22,
          letterSpacing: -0.408,
        },
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerTitle: "Публікації",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="grid" />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <LogOutIcon />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          headerTitle: "Створити публікацію",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="plus" />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftIcon />
            </TouchableOpacity>
          ),
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="user" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
