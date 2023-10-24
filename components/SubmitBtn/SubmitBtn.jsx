import { BtnContainer, BtnText } from "./SubmitBtn.styled";

export const SubmitBtn = ({ children, ...props }) => {
  return (
    <BtnContainer {...props}>
      <BtnText>{children}</BtnText>
    </BtnContainer>
  );
};
