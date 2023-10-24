import { BgImage } from "./Background.styled";

export const Background = ({ children }) => {
  return (
    <BgImage source={require("assets/img/bg-image.jpg")} resizeMode="cover">
      {children}
    </BgImage>
  );
};
