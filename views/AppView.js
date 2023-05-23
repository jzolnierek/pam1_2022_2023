import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductScreen from './ProductScreen';

const Tab = createMaterialBottomTabNavigator();

function AppView() {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="white"
        inactiveColor="white"
        barStyle={{ backgroundColor: '#359026'}}
    >
      <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
            tabBarIcon: ({ color }) => (
                <Icon 
                    name="home-outline"
                    size={28}
                    color="#FFFFFF"
                />
            )
        }} 
      />
      <Tab.Screen 
        name="Lists"
        component={HomeScreen}
        options={{
            tabBarIcon: ({ color }) => (
                <Icon 
                    name="home-outline"
                    size={28}
                    color="#FFFFFF"
                />
            )
        }} 
      />
      <Tab.Screen 
        name="Add"
        component={ProductScreen}
        options={{
            tabBarIcon: ({ color }) => (
                <Icon 
                    name="home-outline"
                    size={28}
                    color="#FFFFFF"
                />
            )
        }} 
      />
      <Tab.Screen 
        name="Products"
        component={HomeScreen}
        options={{
            tabBarIcon: ({ color }) => (
                <Icon 
                    name="home-outline"
                    size={28}
                    color="#FFFFFF"
                />
            )
        }} 
      />
      <Tab.Screen 
        name="Profile"
        component={HomeScreen}
        options={{
            tabBarIcon: ({ color }) => (
                <Icon 
                    name="home-outline"
                    size={28}
                    color="#FFFFFF"
                />
            )
        }} 
      />
      
    </Tab.Navigator>
  );
}

export default AppView