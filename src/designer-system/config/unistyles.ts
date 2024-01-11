import { createUnistyles } from 'react-native-unistyles';

import { breakpoints } from './tokens/breakpoints';
import { theme } from './tokens';

export const { createStyleSheet, useStyles } = createUnistyles<
    typeof breakpoints,
    typeof theme
>(breakpoints);
