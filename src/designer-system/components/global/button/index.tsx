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

    const resolvedSize = useResolvedBreakpointValue(size);

    const styledBase = {
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    };

    const buttonVariantStyles = {
        primary: {
            background: { backgroundColor: 'blue' },
            border: { borderWidth: 2, borderColor: 'blue' },
        },
        secondary: {
            background: { backgroundColor: 'green' },
            border: { borderWidth: 2, borderColor: 'green' },
        },
        tertiary: {
            background: { backgroundColor: 'orange' },
            border: { borderWidth: 2, borderColor: 'orange' },
        },
        quaternary: {
            background: { backgroundColor: 'purple' },
            border: { borderWidth: 2, borderColor: 'purple' },
        },
        'primary-dark': {
            background: { backgroundColor: '#0D47A1' },
            border: { borderWidth: 2, borderColor: '#0D47A1' },
        },
        'secondary-dark': {
            background: { backgroundColor: '#2E7D32' },
            border: { borderWidth: 2, borderColor: '#2E7D32' },
        },
        'tertiary-dark': {
            background: { backgroundColor: '#FF6F00' },
            border: { borderWidth: 2, borderColor: '#FF6F00' },
        },
        'quaternary-dark': {
            background: { backgroundColor: '#6A1B9A' },
            border: { borderWidth: 2, borderColor: '#6A1B9A' },
        },
        default: {
            background: { backgroundColor: 'grey' },
            border: { borderWidth: 2, borderColor: 'grey' },
        },
    };

    const buttonSizeStyles = {
        xlarge: { width: 250, height: 80 },
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
        xlarge: 32,
        large: 24,
        medium: 16,
        small: 12,
    };

    const iconColor = iconColorMapping[resolvedSize || 'medium'] || '#fff';
    const fontSize = fontSizeMapping[resolvedSize || 'medium'] || 16;
    const sizeStyles = buttonSizeStyles[resolvedSize || 'medium'];

    const variantStyles =
        buttonVariantStyles[variant]?.background ||
        buttonVariantStyles.default.background;

    const borderStyles =
        buttonVariantStyles[variant]?.border ||
        buttonVariantStyles.default.border;

    return (
        <ComponentMounter
            as="button"
            disabled={loading || disabled}
            {...attr}
            style={[
                attr.style,
                styledBase,
                variantStyles,
                sizeStyles,
                borderStyles,
            ]}
        >
            {loading && <ActivityIndicator style={loadingIndicatorStyle} />}

            <DsFlex
                flexDirection={iconPosition === 'right' ? 'row-reverse' : 'row'}
                alignItems="center"
                justifyContent="center"
                gap={8}
            >
                {icon && (
                    <DsIcon icon={icon} color={iconColor} fontSize={fontSize} />
                )}
                <DsText fontSize={fontSize} color={iconColor}>
                    {children}
                </DsText>
            </DsFlex>
        </ComponentMounter>
    );
};

export default DsButton;
