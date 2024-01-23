import 'react-native-gesture-handler';

import {
    useFonts,
    Inter_300Light,
    Inter_400Regular,
    Inter_700Bold,
    Inter_900Black,
} from '@expo-google-fonts/inter';

import {
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
} from '@expo-google-fonts/roboto';

// component
import Home from '@components/home';

// @
import { Text, StatusBar } from 'native-flow';
import { ThemeProvider } from 'src/lib/store/theme';
import { defaultTheme } from 'src/theme/customTheme';

export default function App() {
    let [fontsLoaded] = useFonts({
        Inter_300Light,
        Inter_400Regular,
        Inter_700Bold,
        Inter_900Black,
        Roboto_300Light,
        Roboto_400Regular,
        Roboto_700Bold,
        Roboto_900Black,
    });

    if (!fontsLoaded) {
        return <Text>Olá, carregando</Text>;
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <StatusBar style="dark" translucent />
            <Home />
        </ThemeProvider>
    );
}
