import React, { forwardRef } from 'react';

// types
import type { DsLinkRef, DsLinkType } from './types';

// unistyles

// componentMounter
import ComponentMounter from '@ds/core/component-mounter';

const DsLink = forwardRef<DsLinkRef, DsLinkType>((props, ref) => {
    const { children, asChild, _platform, ...attr } = props;

    return (
        <ComponentMounter
            as="Link"
            asChild={asChild}
            ref={ref}
            {...attr}
            style={[attr.style]}
        >
            {children}
        </ComponentMounter>
    );
});

export default DsLink;
