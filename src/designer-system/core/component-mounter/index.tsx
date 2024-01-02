import React from 'react';
import { Platform } from 'react-native';

// config
import { createStyleSheet, useStyles } from '@ds/config/unistyles';

// types
import { ComponentMounterType } from './types';
import { StyledComponents } from '../styles';
import { LinkProps } from 'expo-router';

// styles
//import { BaseStyleView } from '../styles';

const ComponentMounter: React.FC<ComponentMounterType> = (props) => {
    const { children, _platform, _css, href, as = 'View', ...rest } = props;

    const stylesheet = createStyleSheet(() => ({
        flexStyle: {
            ...rest,
        },
    }));

    const { styles } = useStyles(stylesheet);

    const platformStyles = _platform ? _platform(Platform) : {};
    const additionalStyles: any =
        rest.style instanceof Array ? rest.style : [rest.style];

    const BaseStyleView = StyledComponents[as] || StyledComponents.View;

    return (
        <BaseStyleView
            style={[styles.flexStyle, ...additionalStyles, platformStyles]}
            _css={_css}
            href={href as LinkProps<''>['href']}
        >
            {children}
        </BaseStyleView>
    );
};

export default ComponentMounter;
