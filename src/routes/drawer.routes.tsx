import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";


import TabRoutes from "./tab.routes";
import Perfil from "../screens/Perfil";
import Works from "screens/Actions";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: '',
        drawerStyle: { backgroundColor: "#093A1D" },
        drawerLabelStyle: { color: "#fff" },
        headerStyle: { backgroundColor: "#093A1D" },
        headerTintColor: "#fff"
      }}
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