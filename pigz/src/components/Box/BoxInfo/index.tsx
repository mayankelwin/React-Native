import { useState } from "react";
import { Container, TitleGanhos,TitleData, TitleMoney, RowTitle, RowMoney, Icon } from "./styles";
import { TouchableOpacity } from "react-native";

type Props ={
    titleganhos: string;
    titledata: string;
    titlemoney: string;
}

export function BoxInfo({ titleganhos, titledata, titlemoney}: Props){

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = (): void => {
    setIsVisible((prevState) => !prevState);
  };

  const formatMoney = (money: string): string => {
    const numericValue = parseFloat(money.replace(',', '.')) || 0;
    return numericValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };
  
  const maskMoney = (money: string): string => {
    return '----'; 
  };
    return (
        <Container>
            <RowTitle>

            <TitleGanhos>
             {titleganhos}
            </TitleGanhos>

            <TitleData>
              {titledata}
            </TitleData>

            </RowTitle>

            <RowMoney>
            <TitleMoney>
  {isVisible ? formatMoney(titlemoney) : maskMoney(titlemoney)}
</TitleMoney>
            <TouchableOpacity onPress={toggleVisibility}>
        <Icon name={isVisible ? 'eye' : 'eye-off' } size={30} /> 
      </TouchableOpacity>
            </RowMoney>
        </Container>
    )
}