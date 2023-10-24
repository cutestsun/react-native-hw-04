import { BtnContainer, BtnText } from "./AuthSwitchBtn.styled";

export const AuthSwitchBtn = ({ children, ...props }) => {
  return (
    <BtnContainer {...props}>
      <BtnText>{children}</BtnText>
    </BtnContainer>
  );
};
