import React from 'react';
import { ActivityIndicator } from 'react-native';

// types
import type { DsButtonType } from './types';

// config variants buttons
import { buttonConfig } from './config';

// componentMounter
import ComponentMounter from '@ds/core/component-mounter';

// hooks
import useResolvedBreakpointValue from '@ds/hooks/useResolvedBreakpointValue';

// ds
import DsIcon from '../icon';
import { DsText } from '@ds/components/typography';
import { DsFlex } from '@ds/components/layout';

const DsButton: React.FC<DsButtonType> = (props) => {
    const {
        variant,
        size,
        icon,
        iconPosition,
        loading,
        theme,
        disabled,
        loadingIndicatorStyle,
        children,
        ...attr
    } = props;

    const resolvedSize = useResolvedBreakpointValue(size);

    const sizeConfig =
        buttonConfig.sizes[resolvedSize || buttonConfig.defaultSize];
    const backgroundColor = buttonConfig.backgroundColors[variant || 'default'];

    return (
        <ComponentMounter
            as="button"
            disabled={loading || disabled}
            {...attr}
            backgroundColor={backgroundColor}
            borderWidth={2}
            borderColor={backgroundColor}
            width={sizeConfig.width}
            height={sizeConfig.height}
            style={[attr.style, buttonConfig.styledBase]}
        >
            {loading && <ActivityIndicator style={loadingIndicatorStyle} />}
            <DsFlex
                flexDirection={iconPosition === 'right' ? 'row-reverse' : 'row'}
                alignItems="center"
                justifyContent="center"
                gap={8}
            >
                {icon && (
                    <DsIcon
                        icon={icon}
                        color={'#fff'}
                        fontSize={sizeConfig.iconFontSize}
                    />
                )}
                <DsText color={'#fff'} fontSize={sizeConfig.textFontSize}>
                    {children}
                </DsText>
            </DsFlex>
        </ComponentMounter>
    );
};

export default DsButton;
