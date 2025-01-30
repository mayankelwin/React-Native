import { ScrollView } from "react-native";
import { BoxEntregas } from "../../components/Box/BoxEntregas";
import { BoxInfo } from "../../components/Box/BoxInfo";
import { BoxResumo } from "../../components/Box/BoxResumo";
import { Header } from "../../components/Header";

import { Container } from "./styles";

export function HomeScreen(){
    return(
        <Container>

            <Header title="Visâo geral" />
            <ScrollView showsVerticalScrollIndicator={false}>
            <BoxInfo titleganhos=" Ganhos do dia" titledata="27 / 11" titlemoney="250,50"/>
            <BoxResumo nunber1="15" nunber2="5" nunber3="20" />
            <BoxEntregas   />
            </ScrollView>

        </Container>
    )
}