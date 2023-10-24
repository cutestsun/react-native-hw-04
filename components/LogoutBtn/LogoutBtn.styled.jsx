import styled from "styled-components/native";

export const BtnWrapper = styled.TouchableOpacity`
  position: ${({ profile }) => (profile ? "absolute" : "static")};
  top: ${({ profile }) => (profile ? 22 : 0)}px;
  right: ${({ profile }) => (profile ? 26 : 0)}px;
  margin-right: ${({ profile }) => (profile ? 0 : 16)}px;
`;
