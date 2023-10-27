import React from 'react'; // Import React and useEffect
import { Provider } from 'react-redux';
import store from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Box } from 'native-base';
import { StatusBar } from 'react-native'; // Import StatusBar from react-native
import BottomNav from './src/Navigations/BottomNav';
import OrderScreen from './src/Screens/OrderScreen';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <Box flex={1}>
                    <NavigationContainer>
                        <StatusBar hidden={true} />
                        <Stack.Navigator
                            initialRouteName="Login"
                            screenOptions={{
                                headerShown: false,
                            }}
                        >
                            <Stack.Screen
                                name="Login"
                                component={LoginScreen}
                            />
                            <Stack.Screen
                                name="Register"
                                component={RegisterScreen}
                            />
                            <Stack.Screen
                                name="Order"
                                component={OrderScreen}
                            />
                            <Stack.Screen name="Bottom" component={BottomNav} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </Box>
            </NativeBaseProvider>
        </Provider>
    );
}
