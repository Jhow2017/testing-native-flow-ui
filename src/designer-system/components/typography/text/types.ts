import type { ReactNode } from 'react';

// types
import type { BaseFlexTypes } from '@ds/core/types/flex';
import type { BaseTextTypesProps } from '@ds/core/types/text';
import type { BaseThemeTypes } from '@ds/core/types/theme';

export type DsTextTypes = BaseFlexTypes &
    BaseTextTypesProps &
    BaseThemeTypes & {
        children?: ReactNode;
        variant?: 'normal' | 'bold';
        size?: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small';
    };
