import { Dimensions } from 'react-native';

import { breakpoints } from '@ds/config/theme/breakpoints';

// types
import type { BreakpointValue } from '../types/breakpointValue';
type Breakpoints = typeof breakpoints;
type BreakpointKeys = keyof Breakpoints;

const generateCustomCss = (breakpointCss: BreakpointValue<string>): string => {
    const screenWidth = Dimensions.get('window').width;
    let appliedStyles = '';

    const sortedBreakpoints: BreakpointKeys[] = Object.keys(
        breakpoints
    ) as BreakpointKeys[];
    sortedBreakpoints.sort((a, b) => breakpoints[b] - breakpoints[a]);

    for (const breakpoint of sortedBreakpoints) {
        if (screenWidth >= breakpoints[breakpoint]) {
            if (typeof breakpointCss === 'object' && breakpointCss !== null) {
                const style = breakpointCss[breakpoint];
                if (typeof style === 'string') {
                    appliedStyles += style;
                }
            }
            break;
        }
    }

    return appliedStyles;
};

export default generateCustomCss;
