import { StatusBar } from 'expo-status-bar';
import { UnistylesTheme } from 'react-native-unistyles';
import 'react-native-gesture-handler';

import {
    useFonts,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_900Black,
} from '@expo-google-fonts/inter';

// @confg
import { theme } from '@ds/config/theme';

// component
import Home from '@components/home';

// @ds
import { DsText } from '@ds/components/typography';

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
            <StatusBar style="dark" translucent />
            <Home />
        </UnistylesTheme>
    );
}
