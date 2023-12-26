import { sizeMapping } from '@ds/components/global/icon/types';
import { BreakpointValue } from './breakpointValue';

export type Color = 'red' | 'blue' | string;
export type FontFamily =
    | 'Inter_300Light'
    | 'Inter_400Regular'
    | 'Inter_500Medium'
    | 'Inter_700Bold'
    | 'Inter_900Black';
export type BreakpointKey = 'sm' | 'md' | 'lg';

type FontSize = keyof typeof sizeMapping;

export type BaseThemeTypes = {
    backgroundColor?: BreakpointValue<Color>;
    fontFamily?: BreakpointValue<FontFamily>;
    fontSize?: BreakpointValue<FontSize> | number;
};
