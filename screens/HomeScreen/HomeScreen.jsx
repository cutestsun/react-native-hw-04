import { HomeTabsNavigation } from "../../components/BottomTabsNavigation/BottomTabsNavigation";
import { StatusBar } from "expo-status-bar";

export const Home = () => {
  return (
    <>
      <HomeTabsNavigation />
      <StatusBar style="auto" />
    </>
  );
};
