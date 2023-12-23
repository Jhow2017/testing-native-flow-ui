import { ViewProps, ViewStyle } from 'react-native';

import { BreakpointValue } from './breakpointValue';
import { BaseFlexTypes } from './flex';
import { BaseTextTypesProps } from './text';

type Color = 'red' | 'blue';

// Views
type ViewStyleProps = {
    [Property in keyof ViewStyle]?: BreakpointValue<ViewStyle[Property]>;
};

type ViewPropss = {
    [Property in keyof ViewProps]?: BreakpointValue<ViewProps[Property]>;
};

export type BaseViewTypesProps = {
    backgroundColor?: BreakpointValue<Color>;
} & ViewStyleProps &
    ViewPropss &
    BaseFlexTypes &
    BaseTextTypesProps;
