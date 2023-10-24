import { useEffect, useState } from "react";
import { colors } from "../../utils";
import {
  AddPhotoBtn,
  AddPhotoIcon,
  AddPhotoIconWrapper,
  Img,
} from "./AddAvatarBtn.styled";

export const AddAvatarBtn = ({ avatar }) => {
  const [isPhotoAdded, setIsPhotoAdded] = useState(false);

  useEffect(() => {
    if (avatar) {
      setIsPhotoAdded(true);
    }
  }, [avatar]);

  return (
    <AddPhotoBtn
      // onPress={}
      accessibilityLabel="Add photo"
    >
      {isPhotoAdded && <Img source={avatar} resizeMode="cover" />}
      <AddPhotoIconWrapper>
        <AddPhotoIcon
          name={isPhotoAdded ? "close-circle-outline" : "add-circle-outline"}
          size={34.5}
          color={
            isPhotoAdded ? colors.secondaryIconColor : colors.mainAccentColor
          }
        />
      </AddPhotoIconWrapper>
    </AddPhotoBtn>
  );
};
