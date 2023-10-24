import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/variables";
import { LikeIcon, LocationIcon, MessageIcon } from "../Icons/Icons";
import { useNavigation } from "@react-navigation/native";
import {
  Description,
  DetailQuantity,
  DetailWrap,
  MainDetailsContainer,
  SecondDetailsContainer,
  Image,
  LocationText,
  LocationTextWrapper,
} from "./Post.styled";

export const Post = ({ image, description, likes, location, comments }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Comments", { image, comments })}
    >
      <View>
        <Image source={image} alt={`Photo of ${location}`} resizeMode="cover" />
        <Description>{description}</Description>
        <MainDetailsContainer>
          <SecondDetailsContainer>
            <DetailWrap>
              <MessageIcon
                color={
                  comments.length
                    ? colors.mainAccentColor
                    : colors.secondaryIconColor
                }
              />
              <DetailQuantity isDisabled={!comments.length}>
                {comments.length}
              </DetailQuantity>
            </DetailWrap>
            <DetailWrap>
              <LikeIcon
                color={
                  likes ? colors.mainAccentColor : colors.secondaryIconColor
                }
              />
              <DetailQuantity isDisabled={!likes}>{likes}</DetailQuantity>
            </DetailWrap>
          </SecondDetailsContainer>
          <LocationTextWrapper onLongPress={() => console.log("Long press")}>
            <LocationIcon />
            <LocationText>{location.country}</LocationText>
          </LocationTextWrapper>
        </MainDetailsContainer>
      </View>
    </TouchableOpacity>
  );
};
