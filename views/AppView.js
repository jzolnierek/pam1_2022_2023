import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductScreen from './ProductScreen';
import ProductsListScreen from './ProductsListScreen';
import ListsScreen from './ListsScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

function AppView() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="yellow"
            inactiveColor="yellow"
            barStyle={{ backgroundColor: '#359026' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="home-outline"
                            size={28}
                            color="yellow"
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Lists"
                component={ListsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="format-list-bulleted"
                            size={28}
                            color="yellow"
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
                            name="plus-circle-outline"
                            size={28}
                            color="yellow"
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Products"
                component={ProductsListScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="barcode"
                            size={28}
                            color="yellow"
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="account"
                            size={28}
                            color="yellow"
                        />
                    )
                }}
            />

        </Tab.Navigator>
    );
}

export default AppView