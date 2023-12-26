import { ReactNode } from 'react';
import { Insets, TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

// type
import type { Color } from '@ds/core/types/theme';
import type { BaseButtonTypesProps } from '@ds/core/types/icon';
import { DsTextTypes } from '@ds/components/typography/text/types';

export type IconsType =
    | 'bille'
    | 'spotify'
    | 'moon'
    | 'sun'
    | 'arrow-left'
    | 'arrow-right'
    | 'arrow-top'
    | 'apple-logo'
    | 'google-logo'
    | 'eye-hide'
    | 'eye-show'
    | 'more'
    | 'settings'
    | 'search'
    | 'search-active'
    | 'player'
    | 'favorite-active'
    | 'favorite-outline'
    | 'profile-active'
    | 'profile-outline'
    | 'home'
    | 'home-active'
    | 'repeate'
    | 'previous'
    | 'next'
    | 'pause'
    | 'shuffle'
    | 'more-horizontal'
    | 'close';

export type SizeTypes =
    | 'xxlarge'
    | 'xlarge'
    | 'large'
    | 'medium'
    | 'small'
    | 'xsmall';

export const sizeMapping = {
    xxlarge: '56px',
    xlarge: '48px',
    large: '40px',
    medium: '32px',
    small: '24px',
    xsmall: '16px',
};

export type IconProps = {
    size?: SizeTypes | string;
    color?: Color | string;
};

export type SvgComponentProps = {
    children?: ReactNode;
} & IconProps &
    SvgProps;

export interface DsIconType
    extends BaseButtonTypesProps,
        TouchableOpacityProps {
    children?: ReactNode;
    icon: IconsType;
    size?: SizeTypes;
    color?: Color;
    hitSlop?: Insets;
    stylesText?: DsTextTypes;
}
