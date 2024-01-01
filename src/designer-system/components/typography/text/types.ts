import type { ReactNode } from 'react';
import { TextStyle, Platform } from 'react-native';

import { BaseFlexTypes } from '@ds/core/types/flex';
import { BaseTextTypesProps } from '@ds/core/types/text';
import { BaseThemeTypes } from '@ds/core/types/theme';
import { BreakpointValue } from '@ds/core/types/breakpointValue';

export type DsTextTypes = BaseFlexTypes &
    BaseTextTypesProps &
    BaseThemeTypes & {
        children?: ReactNode;
        as?: 'p' | 'small' | 'span' | 'strong' | 'b';
        variant?: 'normal' | 'bold';
        size?: 'xxlarge' | 'xlarge' | 'large';
    };
