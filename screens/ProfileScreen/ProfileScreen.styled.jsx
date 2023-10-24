import styled from "styled-components/native";
import { colors } from "../../utils";

export const MainContainer = styled.View`
  position: relative;
  flex: 1;
  z-index: 100;
  background-color: #fff;
  padding: 92px 16px 44px;
  row-gap: 32px;
  border-radius: 25px 25px 0 0;
  margin-top: 148px;
`;

export const LogoutBtn = styled.View`
  position: absolute;
  top: 22px;
  right: 26px;
`;

export const Username = styled.Text`
  color: ${colors.mainTextColor};
  text-align: center;
  font-family: "Roboto-Medium";
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 0.3px;
`;
