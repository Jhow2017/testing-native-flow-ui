import { BreakpointKeys, breakpoints } from '@ds/config/tokens/breakpoints';
import { cssValue as defaultCssValue } from '../constants';

interface Style {
    [key: string]: string | number | undefined;
}

const filterStyles = (
    attr: any,
    currentBreakpoint: BreakpointKeys,
    customCssValues?: string[]
): any => {
    const cssValuesToUse = customCssValues || defaultCssValue;
    let filteredStyles: Style = {};
    const breakpointKeys: BreakpointKeys[] = Object.keys(
        breakpoints
    ) as BreakpointKeys[];

    for (const key in attr) {
        if (!cssValuesToUse.includes(key)) {
            continue;
        }

        const value = attr[key];
        if (value && typeof value === 'object') {
            for (
                let i = breakpointKeys.indexOf(currentBreakpoint);
                i >= 0;
                i--
            ) {
                const breakpoint = breakpointKeys[i];
                if (value[breakpoint] !== undefined) {
                    filteredStyles[key] = value[breakpoint];
                    break;
                }
            }
        } else {
            filteredStyles[key] = value;
        }
    }

    return filteredStyles;
};

export default filterStyles;
