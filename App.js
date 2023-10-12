import HomeScreen from './src/Screens/HomeScreen';
import { NativeBaseProvider, Text, Box } from 'native-base';
import SingelProductScreen from './src/Screens/SingelProductScreen';
import CartScreen from './src/Screens/CartScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import ShippingScreen from './src/Screens/ShippingScreen';
import PaymentScreen from './src/Screens/PaymentScreen';
import PlaceOrderScreen from './src/Screens/PlaceOrderScreen';

export default function App() {
    return (
        <NativeBaseProvider>
            <Box flex={1}>
                <PlaceOrderScreen />
            </Box>
        </NativeBaseProvider>
    );
}
