import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  
`;

export const Title = styled.Text`
margin-right: 130px;
font-size: ${({theme}) => theme.font_size.lg};
font-family: ${({theme}) => theme.font_family.regular};
text-align: center;
`

export const BackButton = styled(TouchableOpacity)`
  flex: 1;

`;