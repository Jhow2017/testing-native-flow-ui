import React from 'react';
import { Platform } from 'react-native';

// config
import { createStyleSheet, useStyles } from '@ds/config/unistyles';

// types
import { DsTextTypes } from './types';

// utils
import { filterStyles } from '@ds/core/utils/filterStyles';

// styles
import { StyledText } from './styles';

const DsText: React.FC<DsTextTypes> = (props) => {
    const { children, numberOfLines, ellipsizeMode, _css, ...rest } = props;

    const styleFilter = filterStyles(rest);
    const stylesheet = createStyleSheet(() => ({
        flexStyle: {
            ...styleFilter,
        },
    }));

    const { styles } = useStyles(stylesheet);
    const platformStyles = rest?._platform ? rest?._platform(Platform) : {};
    const additionalStyles: any =
        rest.style instanceof Array ? rest.style : [rest.style];

    return (
        <StyledText
            {...props}
            style={[styles.flexStyle, ...additionalStyles, platformStyles]}
        >
            {children}
        </StyledText>
    );
};

export default DsText;
