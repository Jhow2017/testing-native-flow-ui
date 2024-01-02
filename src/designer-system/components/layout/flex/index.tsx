import React from 'react';
import ComponentMounter from '@ds/core/component-mounter';

// config
import { createStyleSheet, useStyles } from '@ds/config/unistyles';

// type
import type { DsFlexType } from './type';

const DsFlex: React.FC<DsFlexType> = (props) => {
    const { children, flexDirection, ...attr } = props;

    const stylesheet = createStyleSheet(() => ({
        flexStyle: {
            flexDirection,
        },
    }));

    const { styles } = useStyles(stylesheet);

    return (
        <ComponentMounter
            {...attr}
            style={[
                attr.style,
                {
                    flexDirection: styles?.flexStyle?.flexDirection || 'row',
                },
            ]}
        >
            {children}
        </ComponentMounter>
    );
};

export default DsFlex;
