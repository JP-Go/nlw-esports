import Background from './src/components/Background';
import Loading from './src/components/Loading';
import { StatusBar } from 'react-native';
import Home from './src/screens/Home';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_900Black,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_900Black,
    Inter_700Bold,
  });
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Home /> : <Loading />}
    </Background>
  );
}
