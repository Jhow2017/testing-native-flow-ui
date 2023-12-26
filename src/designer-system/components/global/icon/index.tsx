import React from 'react';
import {
    Platform,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';

//types external
import { DsIconType, sizeMapping } from './types';

// config
import { createStyleSheet, useStyles } from '@ds/config/unistyles';

// all Icons
import { ICONS } from './icons';

//components
import { DsText } from '@ds/components/typography';
import { DsFlex } from '@ds/components/layout';

const DsIcon: React.FC<DsIconType> = (props) => {
    const {
        fontSize,
        icon,
        size = 'small',
        stylesText,
        color,
        children,
        ...attr
    } = props;

    const IconComponent = ICONS[icon];
    if (!IconComponent) {
        return null;
    }

    const iconSize = fontSize ?? sizeMapping[size];
    const iconColor = (color as string) || '#000';

    const stylesheet = createStyleSheet(() => ({
        flexStyle: {
            ...attr,
        },
    }));

    const { styles } = useStyles(stylesheet);
    const platformStyles = attr?._platform ? attr?._platform(Platform) : {};
    const additionalStyles: any =
        attr.style instanceof Array ? attr.style : [attr.style];

    return (
        <DsFlex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            style={[styles.flexStyle, ...additionalStyles, platformStyles]}
        >
            <TouchableOpacity {...(props as TouchableOpacityProps)}>
                <IconComponent size={iconSize as any} color={iconColor} />
            </TouchableOpacity>

            {children && (
                <DsText
                    marginTop={16}
                    color={'#DADADA'}
                    fontSize={17}
                    fontWeight="700"
                    textTransform={'capitalize'}
                    {...stylesText}
                >
                    {children}
                </DsText>
            )}
        </DsFlex>
    );
};

export default DsIcon;
