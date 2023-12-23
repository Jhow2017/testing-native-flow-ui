import React, { ReactNode } from 'react';
import { View } from 'react-native';

// types
import { BaseViewTypesProps } from '../types/view';

// hooks
import useResponsiveStyles from '@ds/hooks/useResponsiveStyles';

export interface ComponentMounterType extends BaseViewTypesProps {
    children: ReactNode;
}

const ComponentMounter: React.FC<ComponentMounterType> = (props) => {
    const { children, ...rest } = props;
    const style = useResponsiveStyles(rest);

    const additionalStyles: any =
        rest.style instanceof Array ? rest.style : [rest.style];

    return <View style={[style, ...additionalStyles]}>{children}</View>;
};

export default ComponentMounter;
