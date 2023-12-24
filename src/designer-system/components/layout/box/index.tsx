import React from 'react';
import ComponentMounter from '@ds/core/component-mounter';
import { ComponentMounterType } from '@ds/core/component-mounter/types';

export interface DsBoxType extends ComponentMounterType {}

const DsFlex: React.FC<DsBoxType> = (props) => {
    const { children, ...attr } = props;
    return (
        <ComponentMounter {...attr} style={[attr.style]}>
            {children}
        </ComponentMounter>
    );
};

export default DsFlex;
