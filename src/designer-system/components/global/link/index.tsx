import React, { forwardRef } from 'react';
import { Link } from 'expo-router';
import styled, { css } from 'styled-components/native';

// types
import type { DsLinkRef, DsLinkType } from './types';

// unistyles
import { createStyleSheet, useStyles } from '@ds/config/unistyles';

// componentMounter
import ComponentMounter from '@ds/core/component-mounter';
import generateCustomCss from '@ds/core/utils/generateCustomCss';
import { Platform } from 'react-native';

export const BaseStyleView = styled(Link)<DsLinkType>`
    ${({ _css }) =>
        _css &&
        css`
            ${generateCustomCss(_css)}
        `}
`;

const DsLink = forwardRef<DsLinkRef, DsLinkType>((props, ref) => {
    const { children, href, asChild, _platform, ...rest } = props;

    const stylesheet = createStyleSheet(() => ({
        flexStyle: {
            ...rest,
        },
    }));

    const { styles } = useStyles(stylesheet);
    const platformStyles = _platform ? _platform(Platform) : {};
    const additionalStyles: any =
        rest.style instanceof Array ? rest.style : [rest.style];

    return (
        <ComponentMounter {...props}>
            <BaseStyleView
                href={href}
                asChild={asChild}
                ref={ref}
                style={[styles.flexStyle, ...additionalStyles, platformStyles]}
            >
                {children}
            </BaseStyleView>
        </ComponentMounter>
    );
});

export default DsLink;
