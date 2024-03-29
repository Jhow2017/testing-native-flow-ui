import React from 'react';
import { Platform } from 'react-native';
import { LinkProps } from 'expo-router';

// utils
import createAndFilterStyles from '../utils/filters/createAndFilterStyles';
import filterTextStyles from '../utils/filters/filterTextStyles';

// types
import type { ComponentMounterType } from './types';

// styles
import { StyledComponents } from '../styles';

const ComponentMounter: React.FC<ComponentMounterType> = (props) => {
    const { children, _platform, _css, href, as = 'view', ...attr } = props;

    const textPropsFilter = filterTextStyles(attr);
    const filteredFlexStyle = createAndFilterStyles(attr);
    const platformStyles = _platform ? _platform(Platform) : {};
    const additionalStyles: any =
        attr.style instanceof Array ? attr.style : [attr.style];

    const BaseStyleView = StyledComponents[as] || StyledComponents.view;

    return (
        <BaseStyleView
            {...textPropsFilter}
            style={[filteredFlexStyle, platformStyles, ...additionalStyles]}
            _css={_css}
            href={href as LinkProps<''>['href']}
        >
            {children}
        </BaseStyleView>
    );
};

export default ComponentMounter;
