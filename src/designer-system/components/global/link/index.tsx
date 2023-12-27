import React from 'react';
import { Link } from 'expo-router';

// types
import type { DsLinkTypes } from './types';

// componentMounter
import ComponentMounter from '@ds/core/component-mounter';

const DsLink: React.FC<DsLinkTypes> = (props) => {
    const { children, href, asChild, ...rest } = props;

    return (
        <ComponentMounter {...rest}>
            <Link href={href} asChild={asChild}>
                {children}
            </Link>
        </ComponentMounter>
    );
};

export default DsLink;
