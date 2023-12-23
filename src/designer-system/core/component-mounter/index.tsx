import React, { ReactNode } from 'react';
import { Platform, ViewStyle } from 'react-native';

// types
import { BaseViewTypesProps } from '../types/view';

// hooks
import useResponsiveStyles from '@ds/hooks/useResponsiveStyles';
import { BreakpointValue } from '../types/breakpointValue';

// styles
import { BaseStyleView } from '../styles';

export interface ComponentMounterType extends BaseViewTypesProps {
    children: ReactNode;
    _platform?: (platform: typeof Platform) => ViewStyle;
    _css?: BreakpointValue<string>;
}

const ComponentMounter: React.FC<ComponentMounterType> = (props) => {
    const { children, _platform, _css, ...rest } = props;
    const style = useResponsiveStyles(rest);

    const platformStyles = _platform ? _platform(Platform) : {};
    const additionalStyles: any =
        rest.style instanceof Array ? rest.style : [rest.style];

    return (
        <BaseStyleView
            style={[style, ...additionalStyles, platformStyles]}
            _css={_css}
        >
            {children}
        </BaseStyleView>
    );
};

export default ComponentMounter;
