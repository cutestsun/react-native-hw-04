import { StyleSheet } from "react-native";
import { HomeTabsNavigation } from "../components/BottomTabsNavigation";
import { StatusBar } from "expo-status-bar";

export const Home = () => {
  return (
    <>
      <HomeTabsNavigation />
      <StatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  //
});
