import React, { forwardRef } from 'react';
import { Link } from 'expo-router';

// types
import type { DsLinkRef, DsLinkTypes } from './types';

// componentMounter
import ComponentMounter from '@ds/core/component-mounter';

const DsLink = forwardRef<DsLinkRef, DsLinkTypes>((props, ref) => {
    const { children, href, asChild, ...rest } = props;

    return (
        <ComponentMounter {...rest}>
            <Link href={href} asChild={asChild} ref={ref}>
                {children}
            </Link>
        </ComponentMounter>
    );
});

export default DsLink;
