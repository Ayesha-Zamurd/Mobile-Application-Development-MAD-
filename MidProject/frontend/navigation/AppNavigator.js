// frontend/navigation/AppNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomDrawer from '../components/CustomDrawer';
import BottomNav from '../components/BottomNav';

// Import Screens - WelcomeScreen ko add karein
import WelcomeScreen from '../screens/WelcomeScreen'; 
import HomeScreen from '../screens/HomeScreen';
import WinterScreen from '../screens/WinterScreen';
import WinterPretScreen from '../screens/WinterPretScreen';
import WinterUnstitchedScreen from '../screens/WinterUnstitchedScreen';
import SummerScreen from '../screens/SummerScreen';
import SummerPretScreen from '../screens/SummerPretScreen';
import SummerUnstitchedScreen from '../screens/SummerUnstitchedScreen';
import PerfumesScreen from '../screens/PerfumesScreen';
import PerfumesMenScreen from '../screens/PerfumesMenScreen';
import PerfumesWomenScreen from '../screens/PerfumesWomenScreen';
import SaleScreen from '../screens/SaleScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// 🧊 Winter Stack
const WinterStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="WinterClothes" component={WinterScreen} />
    <Stack.Screen name="WinterPret" component={WinterPretScreen} />
    <Stack.Screen name="WinterUnstitched" component={WinterUnstitchedScreen} />
  </Stack.Navigator>
);

// ☀️ Summer Stack
const SummerStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SummerClothes" component={SummerScreen} />
    <Stack.Screen name="SummerPret" component={SummerPretScreen} />
    <Stack.Screen name="SummerUnstitched" component={SummerUnstitchedScreen} />
  </Stack.Navigator>
);

// 🌸 Perfume Stack
const PerfumesStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AllPerfumes" component={PerfumesScreen} />
    <Stack.Screen name="MalePerfumes" component={PerfumesMenScreen} />
    <Stack.Screen name="FemalePerfumes" component={PerfumesWomenScreen} />
  </Stack.Navigator>
);

// 🛍️ Sale Stack
const SaleStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SaleMain" component={SaleScreen} />
  </Stack.Navigator>
);

// 🧭 Tabs inside Drawer
const Tabs = () => (
  <Tab.Navigator
    screenOptions={{ headerShown: false }}
    tabBar={({ navigation, state }) => (
      <BottomNav navigation={navigation} currentRoute={state.routeNames[state.index]} />
    )}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Winter" component={WinterStack} />
    <Tab.Screen name="Summer" component={SummerStack} />
    <Tab.Screen name="Perfumes" component={PerfumesStack} />
    <Tab.Screen name="Sale" component={SaleStack} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
    <Tab.Screen name="Cart" component={CartScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

// 🧭 Drawer wrapping Tabs
const MainApp = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="MainTabs" component={Tabs} />
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  );
};

export default AppNavigator;


