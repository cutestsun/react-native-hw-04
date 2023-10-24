import { TouchableOpacity } from "react-native-gesture-handler";
import { ArrowLeftIcon } from "../Icons/Icons";
import { useNavigation } from "@react-navigation/native";

export const BackBtn = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <ArrowLeftIcon />
    </TouchableOpacity>
  );
};
