import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { View, Image } from 'react-native';

import styleLogo from "styles/main";

import TabRoutes from "./tab.routes";
import NormasTecnicas from "screens/NormasTecnicas";
import Perfil from "screens/Perfil";

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
        headerTitleAlign: "center",
        drawerStyle: { backgroundColor: "#0e4275" },
        drawerLabelStyle: { color: "#fff" },
        headerStyle: { backgroundColor: "#0e4275" },
        headerTintColor: "#fff"
      }}
      drawerContent={(props) => <CustomDrawerContent  {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={TabRoutes}
        options={{
          headerTitle: "Home",
          drawerIcon: ({ size }) => <Feather name="home" color="#fff" size={size}/>,
          drawerLabel: 'Início'
        }}
      />
      <Drawer.Screen
        name="NormasTecnicas"
        component={NormasTecnicas}
        options={{
          headerTitle: "Normas Técnicas",
          drawerIcon: ({ size }) => <Feather name="file-text" color="#fff" size={size}/>,
          drawerLabel: 'Normas Técnicas'
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;