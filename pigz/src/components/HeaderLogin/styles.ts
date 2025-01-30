import styled, { css } from "styled-components/native";

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.base.white};
  width: 100%;
  margin-top: 75px;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.Image`

`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg};
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.base.black};
  margin-top: 8px;
  margin-bottom: 37px;
`;
