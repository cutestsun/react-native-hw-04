import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../utils/variables";
import { IconContainer } from "./Icons.styled";

export const TabBarIcon = ({ focused, name }) => {
  return (
    <IconContainer focused={focused}>
      <Feather
        name={name}
        size={24}
        color={focused ? "#fff" : colors.mainIconColor}
      />
    </IconContainer>
  );
};

export const LogoutIcon = () => {
  return <Feather name="log-out" size={24} color={colors.secondaryIconColor} />;
};

export const ArrowLeftIcon = () => {
  return (
    <Feather
      name="arrow-left"
      size={24}
      color={colors.mainIconColor}
      style={{ marginLeft: 16 }}
    />
  );
};

export const CameraIcon = () => {
  return (
    <FontAwesome name="camera" size={24} color={colors.secondaryIconColor} />
  );
};

export const LocationIcon = () => {
  return <Feather name="map-pin" size={24} color={colors.secondaryIconColor} />;
};

export const TrashIcon = ({ color }) => {
  return <Feather name="trash-2" size={24} color={color} />;
};

export const MessageIcon = ({ color }) => {
  return (
    <Feather
      name="message-circle"
      size={24}
      color={color}
      style={{ transform: [{ scaleX: -1 }] }}
    />
  );
};

export const LikeIcon = ({ color }) => {
  return <Feather name="thumbs-up" size={24} color={color} />;
};

export const SendIcon = ({ color, backgroundColor }) => {
  return (
    <Feather
      name="arrow-up"
      size={26}
      color={color}
      style={{
        padding: 7,
        backgroundColor: backgroundColor,
        borderRadius: 50,
      }}
    />
  );
};
