import React from 'react';
import ComponentMounter from '@ds/core/component-mounter';
import { ComponentMounterType } from '@ds/core/component-mounter/types';

export interface DsBoxType extends ComponentMounterType {}

const DsBox: React.FC<DsBoxType> = (props) => {
    const { children, ...attr } = props;
    return <ComponentMounter {...attr}>{children}</ComponentMounter>;
};

export default DsBox;
