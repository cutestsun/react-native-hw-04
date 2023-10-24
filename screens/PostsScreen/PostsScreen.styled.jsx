import styled from "styled-components/native";
import { colors } from "../../utils";

export const MainContainer = styled.View`
  flex: 1;
  padding: 32px 16px 44px;
  background-color: #fff;
  row-gap: 32px;
`;

export const UserCard = styled.TouchableOpacity`
  flex-direction: row;
  column-gap: 12px;
`;

export const Image = styled.Image`
  border-radius: 16px;
  width: 60px;
  height: 60px;
`;

export const UserInfo = styled.View`
  justify-content: center;
  row-gap: 4px;
`;

export const Name = styled.Text`
  color: ${colors.mainTextColor};
  font-family: "Roboto-Bold";
  font-size: 15px;
  line-height: 15px;
`;

export const Email = styled.Text`
  color: rgba(33, 33, 33, 0.8);
  font-family: "Roboto-Regular";
  font-size: 13px;
  line-height: 13px;
`;
