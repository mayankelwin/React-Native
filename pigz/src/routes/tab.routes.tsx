import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreen } from "../screens/Home";

type TabParamList = {
  Home: undefined;
  Relatorios: undefined;
  Perfil: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const RelatoriosScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Relatórios</Text>
    </View>
  );
};

const PerfilScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Perfil</Text>
    </View>
  );
};

export const Tabs: React.FC = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string;
            let iconSize = focused ? 24 : 20;
  
            switch (route.name) {
              case "Relatorios":
                iconName = focused ? "newspaper" : "newspaper-outline";
                break;
              case "Home":
                iconName = focused ? "home" : "home-outline";
                break;
              case "Perfil":
                iconName = focused ? "person" : "person-outline";
                break;
              default:
                iconName = "help-circle-outline";
                break;
            }
  
            return <Ionicons name={iconName} size={iconSize} color={color} />;
          },
          tabBarLabelStyle: { marginTop: 5, fontSize: 10 },
          tabBarActiveTintColor: "#FF881F",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          tabBarStyle: {
            height: 70,
            paddingTop: 10,
            paddingBottom: 10,
            borderTopWidth: 0,
            backgroundColor: "#fff",
          },
        })}
      >
        <Tab.Screen name="Relatorios" component={RelatoriosScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Perfil" component={PerfilScreen} />
      </Tab.Navigator>
    );
  };
  