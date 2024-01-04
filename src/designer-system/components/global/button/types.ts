import { TouchableOpacityProps } from 'react-native';

// types
import type { IconsType } from '../icon/types';
import type { ComponentMounterType } from '@ds/core/component-mounter/types';
import { BreakpointValue } from '@ds/core/types/breakpointValue';

type SizeType = 'small' | 'medium' | 'large' | 'xlarge'; // 'xxlarge'

export type DsButtonType = {
    variant:
        | 'primary'
        | 'secondary'
        | 'tertiary'
        | 'quaternary'
        | 'primary-dark'
        | 'secondary-dark'
        | 'tertiary-dark'
        | 'quaternary-dark'
        | 'default';
    size?: BreakpointValue<'xlarge' | 'large' | 'medium' | 'small'>;
    icon?: IconsType;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    theme?: 'light' | 'dark'; // Theme for Dark Mode support
    loadingIndicatorStyle?: any; // Style object for customizing the loading indicator
} & ComponentMounterType &
    TouchableOpacityProps;
