import { BreakpointValue } from './breakpointValue';

export type Color = 'red' | 'blue';
export type FontFamily = 'Inter';
export type BreakpointKey = 'sm' | 'md' | 'lg';

export type BaseThemeTypes = {
    backgroundColor?: BreakpointValue<Color>;
    fontFamily?: BreakpointValue<FontFamily>;
};
