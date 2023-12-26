import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

//components
import { DsText } from '@ds/components/typography';
import { DsFlex } from '@ds/components/layout';

//types external
import { DsIconType, sizeMapping } from './types';
import { ICONS } from './icons';

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

    return (
        <DsFlex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            style={{ ...attr }}
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
