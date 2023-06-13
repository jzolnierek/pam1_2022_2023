import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProfileScreen from '../views/ProfileScreen';
// import ProductScreen from '../views/ProductScreen';
// import HomeScreen from '../views/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

function BottomNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Lists" component={HomeScreen} />
            <Tab.Screen name="Add" component={ProductScreen} />
            <Tab.Screen name="Products" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default BottomNavigation