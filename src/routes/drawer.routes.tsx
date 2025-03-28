import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { View, Image } from 'react-native';

import styleLogo from "styles/main";

import TabRoutes from "./tab.routes";
import Perfil from "../screens/Perfil";
import Works from "screens/Actions";

import logo from "../../assets/logo.png";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styleLogo.imageContainer}>
        <Image source={logo} style={styleLogo.image}/>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: '',
        drawerStyle: { backgroundColor: "#0e4275" },
        drawerLabelStyle: { color: "#fff" },
        headerStyle: { backgroundColor: "#0e4275" },
        headerTintColor: "#fff"
      }}
      drawerContent={(props) => <CustomDrawerContent  {...props} />}
    >
      <Drawer.Screen
        name="Início"
        component={TabRoutes}
        options={{
          drawerIcon: ({ size }) => <Feather name="home" color="#fff" size={size}/>,
          drawerLabel: 'Início'
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Perfil}
        options={{
          drawerIcon: ({ size }) => <Feather name="user" color="#fff" size={size}/>,
          drawerLabel: 'Meu Perfil'
        }}
      />
      <Drawer.Screen
        name="Works"
        component={Works}
        options={{
          drawerIcon: ({ size }) => <Feather name="settings" color="#fff" size={size}/>,
          drawerLabel: 'Meus Serviços'
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;