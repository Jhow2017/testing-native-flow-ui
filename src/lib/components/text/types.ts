import type { ReactNode } from 'react';

// types
import { BaseViewTypesProps } from '../../core/types/view';

export type DsTextTypes = BaseViewTypesProps & {
    children?: ReactNode;
    variant?: 'normal' | 'bold';
    size?: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small';
};
