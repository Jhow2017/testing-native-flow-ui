import styled, { css } from 'styled-components/native';

import {
    BaseInputTypes,
    BaseViewTypesProps,
    BreakpointValue,
} from '@ds/core/types';
import generateCustomCss from '@ds/core/utils/generateCustomCss';

interface BaseStyleViewProps extends BaseInputTypes {
    _css?: BreakpointValue<string>;
    ref: any;
}

export const BaseStyleView = styled.TextInput<BaseStyleViewProps>`
    ${({ _css }) =>
        _css &&
        css`
            ${generateCustomCss(_css)}
        `}
`;
