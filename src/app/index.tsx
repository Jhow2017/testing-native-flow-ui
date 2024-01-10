import { UnistylesTheme } from 'react-native-unistyles';
import { theme } from '@ds/config/theme';
import {
    useFonts,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_900Black,
} from '@expo-google-fonts/inter';

import 'react-native-gesture-handler';

// component
import Home from '@components/home';
import { DsText } from '@ds/components/typography';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    let [fontsLoaded] = useFonts({
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_700Bold,
        Inter_900Black,
    });

    if (!fontsLoaded) {
        return <DsText>Olá, carregando</DsText>;
    }
    return (
        <UnistylesTheme theme={theme}>
            <StatusBar style="light" translucent />
            <Home />
        </UnistylesTheme>
    );
}
