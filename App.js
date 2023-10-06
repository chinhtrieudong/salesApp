import HomeScreen from './src/Screens/HomeScreen';
import { NativeBaseProvider, Text, Box } from 'native-base';
import SingelProductScreen from './src/Screens/SingelProductScreen';
import CartScreen from './src/Screens/CartScreen';

export default function App() {
    return (
        <NativeBaseProvider>
            <Box flex={1}>
                <CartScreen />
            </Box>
        </NativeBaseProvider>
    );
}
