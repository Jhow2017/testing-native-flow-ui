import styled from 'styled-components/native';
import {
    ViewProps,
    TextProps,
    TouchableOpacityProps,
    ScrollViewProps,
} from 'react-native';
import { Link, LinkProps } from 'expo-router';

import generateCustomCss from '../utils/generateCustomCss';
import { BreakpointValue } from '../types/breakpointValue';

interface BaseStyleViewProps {
    _css?: BreakpointValue<string>;
}

type StyledComponentType = {
    view: React.ComponentType<ViewProps & BaseStyleViewProps>;
    link: React.ComponentType<LinkProps<''> & BaseStyleViewProps>;
    // Text: React.ComponentType<TextProps & BaseStyleViewProps>;
    button: React.ComponentType<TouchableOpacityProps & BaseStyleViewProps>;
    // ScrollView: React.ComponentType<ScrollViewProps & BaseStyleViewProps>;
};

const applyCustomStyles = (styleProps: BaseStyleViewProps) =>
    styleProps._css ? generateCustomCss(styleProps._css) : '';

export const StyledComponents: StyledComponentType = {
    view: styled.View`
        ${applyCustomStyles}
    `,
    link: styled(Link)`
        ${applyCustomStyles}
    `,
    // Text: styled.Text`
    //     ${applyCustomStyles}
    // `,
    button: styled.TouchableOpacity`
        ${applyCustomStyles}
    `,
    // ScrollView: styled.ScrollView`
    //     ${applyCustomStyles}
    // `,
};
