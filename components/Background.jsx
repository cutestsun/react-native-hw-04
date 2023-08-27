import { ImageBackground, StyleSheet } from "react-native";

export const Background = ({ children }) => {
  return (
    <ImageBackground
      source={require("../assets/img/bg-image.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
