import { ViewProps, ViewStyle } from 'react-native';

// hook
import { BreakpointValue } from './breakpointValue';

// types
import type { BaseFlexTypes } from './flex';
import type { BaseTextTypesProps } from './text';
import type { Color, FontFamily } from './theme';

type ViewStyleProps = {
    [Property in keyof ViewStyle]?: BreakpointValue<ViewStyle[Property]>;
};

type ViewPropss = {
    [Property in keyof ViewProps]?: BreakpointValue<ViewProps[Property]>;
};

export type BaseViewTypesProps = ViewStyleProps &
    ViewPropss &
    BaseFlexTypes &
    BaseTextTypesProps & {
        backgroundColor?: BreakpointValue<Color>;
        fontFamily?: BreakpointValue<FontFamily>;
    };
