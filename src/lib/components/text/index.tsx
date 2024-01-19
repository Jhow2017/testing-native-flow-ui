import React from 'react';

//
import ComponentMounter from '../../core/component-mounter';

// types
import { DsTextTypes } from './types';

const DsText: React.FC<DsTextTypes> = (props) => {
    const { children, variant, size, ...attr } = props;

    const fontSizeMapping = {
        xxlarge: 42,
        xlarge: 32,
        large: 24,
        medium: 16,
        small: 12
    };

    const fontSize = fontSizeMapping[size || 'medium'] || 16;

    return (
        <ComponentMounter
            as="text"
            {...attr}
            style={attr?.style}
            fontWeight={attr?.fontWeight ?? variant === 'bold' ? 'bold' : 'normal'}
            fontSize={attr?.fontSize ?? fontSize}
        >
            {children}
        </ComponentMounter>
    );
};

export default DsText;
