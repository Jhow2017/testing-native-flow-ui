import React from 'react';
import ComponentMounter from '@ds/core/component-mounter';
import { ComponentMounterType } from '@ds/core/component-mounter/types';

export interface DsFlexType extends ComponentMounterType {}

const DsFlex: React.FC<DsFlexType> = (props) => {
    const { children, ...attr } = props;
    return (
        <ComponentMounter
            {...attr}
            style={[
                attr.style,
                {
                    flexDirection: 'row',
                },
            ]}
        >
            {children}
        </ComponentMounter>
    );
};

export default DsFlex;
