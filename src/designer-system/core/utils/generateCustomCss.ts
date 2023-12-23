import { Dimensions } from 'react-native';
import { BreakpointValue } from '../types/breakpointValue';
import { breakpoints } from '@ds/config';

const generateCustomCss = (cssBreakpoint: BreakpointValue<string>): string => {
    const screenWidth = Dimensions.get('window').width;
    const isValidStyle = (style: string) => {
        // Basic validation example: check if it includes ":" and ";" indicating a style statement
        return (
            typeof style === 'string' &&
            style.includes(':') &&
            style.includes(';')
        );
    };

    if (typeof cssBreakpoint === 'object') {
        for (const [breakpoint, width] of Object.entries(breakpoints)) {
            const style = cssBreakpoint[breakpoint];
            if (screenWidth >= width && style && isValidStyle(style)) {
                return style;
            }
        }
    } else if (isValidStyle(cssBreakpoint)) {
        return cssBreakpoint;
    }

    return ''; // Returns an empty string if the style is not valid
};

export default generateCustomCss;
