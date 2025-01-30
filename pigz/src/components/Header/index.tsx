import { useNavigation } from "@react-navigation/native";
import { Container, Title, BackButton} from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';


type Props = {
    title: string;
}



export function Header ({title}: Props,) {

    const navigation = useNavigation()

    function handleGOBack(){
    navigation.navigate('Login');
  }


return (
<Container>
    <BackButton onPress={( ) => handleGOBack()}>
<AntDesign name="arrowleft" size={24} color={'#FF881F'} />
    </BackButton>

 <Title>
    {title}
 </Title>

</Container>
)
}