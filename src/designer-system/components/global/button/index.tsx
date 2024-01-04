import React from 'react';
import { ActivityIndicator } from 'react-native';

// types
import type { DsButtonType } from './types';

// componentMounter
import ComponentMounter from '@ds/core/component-mounter';
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

    // Estilos base que se aplicam a todas as variantes
    const styledBase = {
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center', // Centraliza horizontalmente no flex container
        alignItems: 'center', // Centraliza verticalmente no flex container
        flexDirection: 'row', // Organiza os filhos em linha
    };

    // Estilos específicos para cada variante
    const buttonVariantStyles = {
        primary: { backgroundColor: 'blue' },
        secondary: { backgroundColor: 'green' },
        tertiary: { backgroundColor: 'orange' },
        quaternary: { backgroundColor: 'purple' },
        'primary-dark': { backgroundColor: '#0D47A1' }, // Variação mais escura para 'primary'
        'secondary-dark': { backgroundColor: '#2E7D32' }, // Variação mais escura para 'secondary'
        'tertiary-dark': { backgroundColor: '#FF6F00' }, // Variação mais escura para 'tertiary'
        'quaternary-dark': { backgroundColor: '#6A1B9A' }, // Variação mais escura para 'quaternary'
        default: { backgroundColor: 'grey' },
    };

    // Estilos específicos para cada tamanho
    const buttonSizeStyles = {
        xlarge: { width: 200, height: 60 },
        large: { width: 180, height: 50 },
        medium: { width: 160, height: 40 },
        small: { width: 140, height: 30 },
    };

    // Combinando estilos da variante e do tema, se necessário
    const variantStyles =
        buttonVariantStyles[variant] || buttonVariantStyles.default;
    const sizeStyles = buttonSizeStyles[size] || {};

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
                {icon && <DsIcon icon="close" color="#fff" fontSize={22} />}
                <DsText fontSize={16}>{children}</DsText>
            </DsFlex>
        </ComponentMounter>
    );
};

export default DsButton;
