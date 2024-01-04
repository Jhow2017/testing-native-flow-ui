import { TouchableOpacityProps } from 'react-native';

// types
import type { IconsType } from '../icon/types';
import type { ComponentMounterType } from '@ds/core/component-mounter/types';

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
    size: 'xlarge' | 'small' | 'medium' | 'large';
    icon?: IconsType;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    theme?: 'light' | 'dark'; // Theme for Dark Mode support
    loadingIndicatorStyle?: any; // Style object for customizing the loading indicator
} & ComponentMounterType &
    TouchableOpacityProps;
