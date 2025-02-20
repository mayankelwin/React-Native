import { TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
padding: 15px;

height: 220px;
width: 100%;
margin-top: 30px ;
margin-bottom: 100px;
background-color: ${({theme}) => theme.colors.base.white};
border: 1px solid ${({theme})=> theme.colors.base.gray300};

border-radius: 20px;

`
export const Title = styled.Text`
font-size: ${({theme}) => theme.font_size.md};
font-family:${({theme})=> theme.font_family.bold};
color: ${({theme})=> theme.colors.base.black};

`

export const SubTitle = styled.Text`
font-size: ${({theme}) => theme.font_size.sm};
font-family:${({theme})=> theme.font_family.regular};
color: ${({theme})=> theme.colors.base.gray400};

`

export const BoxInput = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 5px;
`

export const Input = styled(TextInput)`

width: 75%;
height: 48px;

color: ${({ theme }) => theme.colors.base.gray500};
border: 1px solid  #fa641e;
border-radius: 15px;

padding: 12px;
`

export const Btn = styled(TouchableOpacity)`
width: 70px;
height: 55px;

border-radius: 20px;


background-color: ${({theme}) => theme.colors.base.Orange};

align-items: center;
justify-content: center;

`
export const TitleBtn = styled.Text`
text-align: center;
font-size: ${({theme}) => theme.font_size.sm};
color: ${({theme}) => theme.colors.base.white};
font-family: ${({theme}) => theme.font_family.bold};;
text-align: center;
justify-content: center;
`

export const BtnQr = styled(TouchableOpacity)`
flex-direction: row;

margin-top: 10px;

width: 100%;
height: 48px;

border-radius: 20px;

padding: 12px;

background-color: ${({theme}) => theme.colors.base.Orange};

align-items: center;
justify-content: center;
`

export const QrCode = styled(MaterialCommunityIcons)`
margin-right: 10px;
align-items: center;
justify-content: center;
color: ${({ theme }) => theme.colors.base.white};
`