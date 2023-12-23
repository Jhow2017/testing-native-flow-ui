import React from 'react';
import { Platform } from 'react-native';

// config
import { createStyleSheet, useStyles } from '@ds/config/unistyles';

// types
import { ComponentMounterType } from './types';

// styles
import { BaseStyleView } from '../styles';

const ComponentMounter: React.FC<ComponentMounterType> = (props) => {
    const { children, _platform, _css, ...rest } = props;

    const stylesheet = createStyleSheet(() => ({
        flexStyle: {
            ...rest,
        },
    }));

    const { styles } = useStyles(stylesheet);

    const platformStyles = _platform ? _platform(Platform) : {};
    const additionalStyles: any =
        rest.style instanceof Array ? rest.style : [rest.style];

    return (
        <BaseStyleView
            style={[styles.flexStyle, ...additionalStyles, platformStyles]}
            _css={_css}
        >
            {children}
        </BaseStyleView>
    );
};

export default ComponentMounter;
