import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";


export const Btn = styled(TouchableOpacity)`
  min-height: 50px;
  max-height: 50px;
border-radius: 20px;
padding: 16px;
background-color: #FA641E;
elevation: 10px;
`

export const TItle = styled.Text`
font-size: ${({ theme }) => theme.font_size.md};
color: ${({theme}) => theme.colors.base.white};
font-family: ${({theme}) => theme.font_family.bold};;
text-align: center;
justify-content: center;
`