import { TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Feather  from "@expo/vector-icons/Feather";

export const Email = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme }) => theme.colors.base.white};

  color: ${({ theme }) => theme.colors.base.gray500};

  border: 1px solid #fa641e;
  border-radius: 20px;

  padding: 16px;
`;
export const Senha = styled(TextInput)`
  flex: 1;

  width: 100%;
  height: 90%;

  background-color: ${({ theme }) => theme.colors.base.white};

  color: ${({ theme }) => theme.colors.base.gray500};
  border-radius: 20px;
  

  padding: 16px;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.base.black};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.md};
  margin-bottom: 16px;
`;
export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.base.gray400};
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.sm};
  margin-bottom: 6px;
  margin-top: 6px;
`;
export const BoxInput = styled.View`
  width: 100%;
  height: 56px;
  border-width: 1px;
  flex-direction: row;
  border-radius: 20px;
  border: 1px solid #FF881F;
  
  align-items: center;
  justify-content: center;
  `;

export const Icon = styled(Feather)`
margin-right: 15px;
size: 24;
color: ${({ theme }) => theme.colors.base.Orange};

`;

export const Btn = styled(TouchableOpacity)`
  min-height: 56px;
  max-height: 56px;
border-radius: 20px;
padding: 16px;
background-color: #FF881F;
`


export const EsqueceuSenha = styled(TouchableOpacity)`
  margin-top: 24px;
  margin-bottom: 24px;
`;
export const TitleEsqueceu = styled.Text`
  color: ${({ theme }) => theme.colors.base.gray400};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.md};
  text-decoration: underline;
  `;



export const BoxSingIn = styled.View`
width: 100%;
margin-top: 36px;
margin-bottom: 97px;

align-items: center;
justify-content: center;


flex-direction: row;
`
export const TextSingIn = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.base.gray400};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.sm};
`

export const BtnCriarConta = styled(TouchableOpacity)`
margin-left: 10px;
align-items: center;
justify-content: center;

`;
export const TitleCriar = styled.Text`
text-align: center;

  color: ${({ theme }) => theme.colors.base.Orange};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.sm};

  `;


export const TitleEntrarGoogle = styled.Text`
color: ${({ theme }) => theme.colors.base.black};

font-family: ${({ theme }) => theme.font_family.bold};

font-size: ${({ theme }) => theme.font_size.md};
margin-bottom: 16px;
`;

export const BoxGoole1 = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;

`
export const Border = styled.View`
height: 20px;
margin-left: 10px;
justify-content: center;
width: 240px;
border-top-width: 2px; 
border-top-color: ${({ theme }) => theme.colors.base.gray300};
`

export const BoxGoogle2 = styled.View`
flex-direction: row;
width: 100%;
`
export const BtnGoogle = styled(TouchableOpacity)`
  width: 100%;
  height: 56px;
  border-width: 1px;
  flex-direction: row;
  border-radius: 20px;
  border: 1px solid #9F9F9F;
  
  align-items: center;
  justify-content: center;
`
export const ImgGoogle = styled.Image`
margin-right: 60px;
width: 25px;
height: 25px;
`
export const TitleGoogle = styled.Text`
text-align: center;
margin-right: 60px;
color: ${({ theme }) => theme.colors.base.gray500};
font-family: ${({ theme }) => theme.font_family.bold};
font-size: ${({ theme }) => theme.font_size.md};

`