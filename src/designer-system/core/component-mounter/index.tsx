import React from 'react';
import { Platform } from 'react-native';
import { LinkProps } from 'expo-router';

// utils
import createAndFilterStyles from '../utils/createAndFilterStyles';

// types
import type { ComponentMounterType } from './types';

// styles
import { StyledComponents } from '../styles';

const ComponentMounter: React.FC<ComponentMounterType> = (props) => {
    const { children, _platform, _css, href, as = 'view', ...rest } = props;

    const filteredFlexStyle = createAndFilterStyles(rest);
    const platformStyles = _platform ? _platform(Platform) : {};
    const additionalStyles: any =
        rest.style instanceof Array ? rest.style : [rest.style];

    const BaseStyleView = StyledComponents[as] || StyledComponents.view;

    return (
        <BaseStyleView
            style={[filteredFlexStyle, platformStyles, ...additionalStyles]}
            _css={_css}
            href={href as LinkProps<''>['href']}
        >
            {children}
        </BaseStyleView>
    );
};

export default ComponentMounter;
