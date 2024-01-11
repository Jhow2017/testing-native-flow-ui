import { UnistylesTheme } from 'react-native-unistyles';
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

// @confg
import { theme } from '@ds/config/tokens';

// component
import Home from '@components/home';

// @ds
import { DsText } from '@ds/components/typography';
import DsStatusBar from '@ds/components/global/status-bar';

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
        return <DsText>Olá, carregando</DsText>;
    }
    return (
        <UnistylesTheme theme={theme}>
            <DsStatusBar style="dark" translucent />
            <Home />
        </UnistylesTheme>
    );
}
