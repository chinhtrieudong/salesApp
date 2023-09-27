import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/Screens/HomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaView>

      <HomeScreen/>
    </SafeAreaView>
    
  );
}

