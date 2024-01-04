import React from 'react';
import { ActivityIndicator } from 'react-native';

// types
import type { DsButtonType } from './types';

// componentMounter
import ComponentMounter from '@ds/core/component-mounter';

// ds
import DsIcon from '../icon';
import { DsText } from '@ds/components/typography';
import { DsFlex } from '@ds/components/layout';
import useResolvedBreakpointValue from '@ds/hooks/useResolvedBreakpointValue';

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

    const styledBase = {
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    };

    const buttonVariantStyles = {
        primary: { backgroundColor: 'blue' },
        secondary: { backgroundColor: 'green' },
        tertiary: { backgroundColor: 'orange' },
        quaternary: { backgroundColor: 'purple' },
        'primary-dark': { backgroundColor: '#0D47A1' },
        'secondary-dark': { backgroundColor: '#2E7D32' },
        'tertiary-dark': { backgroundColor: '#FF6F00' },
        'quaternary-dark': { backgroundColor: '#6A1B9A' },
        default: { backgroundColor: 'grey' },
    };

    const buttonSizeStyles = {
        xlarge: { width: 200, height: 60 },
        large: { width: 180, height: 50 },
        medium: { width: 160, height: 40 },
        small: { width: 140, height: 30 },
    };

    const iconColorMapping = {
        xlarge: '#fff',
        large: '#eee',
        medium: '#ddd',
        small: '#ccc',
    };

    const fontSizeMapping = {
        xlarge: 18,
        large: 16,
        medium: 14,
        small: 12,
    };

    const resolvedSize = useResolvedBreakpointValue(size);

    const iconColor = iconColorMapping[resolvedSize || 'medium'] || '#fff';
    const fontSize = fontSizeMapping[resolvedSize || 'medium'] || 16;
    const sizeStyles = buttonSizeStyles[resolvedSize || 'medium'];

    const variantStyles =
        buttonVariantStyles[variant] || buttonVariantStyles.default;

    return (
        <ComponentMounter
            as="button"
            disabled={loading || disabled}
            {...attr}
            style={[attr.style, styledBase, variantStyles, sizeStyles]}
        >
            {loading && <ActivityIndicator style={loadingIndicatorStyle} />}

            <DsFlex
                flexDirection={iconPosition === 'right' ? 'row-reverse' : 'row'}
                alignItems="center"
                justifyContent="center"
                gap={8}
            >
                {icon && (
                    <DsIcon icon="close" color={iconColor} fontSize={22} />
                )}
                <DsText fontSize={fontSize}>{children}</DsText>
            </DsFlex>
        </ComponentMounter>
    );
};

export default DsButton;
