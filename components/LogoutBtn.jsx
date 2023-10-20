import { TouchableOpacity } from "react-native";
import { LogoutIcon } from "./Icons";
import { useNavigation } from "@react-navigation/native";

export const LogoutBtn = ({ ...props }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Login")} {...props}>
      <LogoutIcon />
    </TouchableOpacity>
  );
};
