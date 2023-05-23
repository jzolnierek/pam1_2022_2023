import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import LoginScreen from './views/LoginScreen';
import HomeScreen from './views/HomeScreen';
import RegisterScreen from './views/RegisterScreen';
import ForgotPasswordScreen from './views/ForgotPasswordScreen';
import AppView from './views/AppView';

const Stack = createNativeStackNavigator();



export default function App() {
  const [loaded] = useFonts({
    Pacifico: require('./assets/fonts/Pacifico-Regular.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* temporary */}
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} /> */}

        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="AppView" component={AppView} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
