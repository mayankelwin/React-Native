import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { HomeScreen } from "../screens/Home";
import { NovaEntrega } from "../screens/NovaEntrega";
import { Tabs } from "./tab.routes";

const { Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Login" component={Login} />
            <Screen name="Home" component={HomeScreen} />
            <Screen name="NovaEntrega" component={NovaEntrega} />
            <Screen name="Tabs" component={Tabs} />
        </Navigator>
    )
}

