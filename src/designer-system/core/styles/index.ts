import styled, { css } from 'styled-components/native';

import generateCustomCss from '../utils/generateCustomCss';
import { BreakpointValue } from '../types/breakpointValue';

interface BaseStyleViewProps {
    _css?: BreakpointValue<string>;
}

export const BaseStyleView = styled.View<BaseStyleViewProps>`
    ${({ _css }) =>
        _css &&
        css`
            ${generateCustomCss(_css)}
        `}
`;
