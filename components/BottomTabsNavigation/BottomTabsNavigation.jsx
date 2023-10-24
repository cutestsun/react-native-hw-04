import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { TabBarIcon } from "../Icons/Icons";
import { CreatePostsScreen, PostsScreen, ProfileScreen } from "../../screens";
import { colors } from "../../utils/variables";
import { hasDynamicIsland } from "../../utils/hasDynamicIsland";
import { BackBtn } from "../BackBtn/BackBtn";
import { LogoutBtn } from "../LogoutBtn/LogoutBtn";

const Tab = createBottomTabNavigator();

export const HomeTabsNavigation = () => {
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
          height: Platform.OS === "ios" ? (hasDynamicIsland ? 108 : 88) : 72,
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
          headerRight: () => <LogoutBtn />,
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
          headerLeft: () => <BackBtn />,
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
