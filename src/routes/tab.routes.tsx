import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Perfil from "screens/Perfil";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#0e4275" },
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#ffa3"  
      }}
    >
      <Tab.Screen 
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: () => <Feather name="home" size={24} color="#fff" />
        }}
      />
      <Tab.Screen 
        name="Perfil"
        component={Perfil}
        options={{
          headerTitle: "Perfil",
          tabBarIcon: () => <Feather name="user" size={24} color="#fff" />
        }}
      />
    </Tab.Navigator>
  )
}

export default TabRoutes;
