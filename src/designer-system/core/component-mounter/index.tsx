import React, { ReactNode } from 'react';
import { Platform, ViewStyle } from 'react-native';

// types
import { BaseViewTypesProps } from '../types/view';

// hooks
import { BreakpointValue } from '../types/breakpointValue';
import { createStyleSheet, useStyles } from '@ds/config/unistyles';
import { StyledComponents } from '../styles';

// styles

export interface ComponentMounterType extends BaseViewTypesProps {
    children: ReactNode;
    _platform?: (platform: typeof Platform) => ViewStyle;
    _css?: BreakpointValue<string>;
    as?: keyof typeof StyledComponents;
}

const ComponentMounter: React.FC<ComponentMounterType> = (props) => {
    const { children, _platform, _css, as = 'View', ...rest } = props;

    const stylesheet = createStyleSheet(() => ({
        flexStyle: {
            ...rest,
        } as ViewStyle,
    }));

    const { styles } = useStyles(stylesheet);

    const platformStyles = _platform ? _platform(Platform) : {};
    const additionalStyles: any =
        rest.style instanceof Array ? rest.style : [rest.style];

    const BaseComponent = StyledComponents[as] || StyledComponents.View;

    return (
        <BaseComponent
            style={[styles.flexStyle, ...additionalStyles, platformStyles]}
            _css={_css}
        >
            {children}
        </BaseComponent>
    );
};

export default ComponentMounter;
