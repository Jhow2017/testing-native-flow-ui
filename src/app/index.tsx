import { UnistylesTheme } from 'react-native-unistyles';
import { theme } from '@ds/config/theme';

// component
import Home from '@components/home';

export default function App() {
    return (
        <UnistylesTheme theme={theme}>
            <Home />
        </UnistylesTheme>
    );
}
