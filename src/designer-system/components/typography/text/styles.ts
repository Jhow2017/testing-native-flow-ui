import styled, { css } from 'styled-components/native';
import generateCustomCss from '@ds/core/utils/generateCustomCss';
import { DsTextTypes } from './types';

export const StyledText = styled.Text<DsTextTypes>`
    ${({ _css }) =>
        _css &&
        css`
            ${generateCustomCss(_css)}
        `}
`;
