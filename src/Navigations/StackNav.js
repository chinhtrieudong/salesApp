import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SingelProductScreen from '../Screens/SingelProductScreen';
import ShippingScreen from '../Screens/ShippingScreen';
import PaymentScreen from '../Screens/PaymentScreen';
import PlaceOrderScreen from '../Screens/PlaceOrderScreen';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Single" component={SingelProductScreen} />
            <Stack.Screen name="Shipping" component={ShippingScreen} />
            <Stack.Screen name="Checkout" component={PaymentScreen} />
            <Stack.Screen name="Placeorder" component={PlaceOrderScreen} />
        </Stack.Navigator>
    );
};

export default StackNav;
