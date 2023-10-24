import { TouchableOpacity } from "react-native";
import { LogoutIcon } from "../Icons/Icons";
import { useNavigation } from "@react-navigation/native";
import { BtnWrapper } from "./LogoutBtn.styled";

export const LogoutBtn = ({ ...props }) => {
  const navigation = useNavigation();

  return (
    <BtnWrapper onPress={() => navigation.navigate("Login")} {...props}>
      <LogoutIcon />
    </BtnWrapper>
  );
};
