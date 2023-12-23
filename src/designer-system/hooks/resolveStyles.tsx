import { breakpoints } from '@ds/config';
import { BreakpointValue } from '@ds/core/types/breakpointValue';
import { BaseViewTypesProps } from '@ds/core/types/view';
import { FlexStyle, ViewStyle } from 'react-native';

// Função resolveStyle atualizada
export function resolveStyle<T>(
    prop: BreakpointValue<T>,
    screenSize: number
): T | undefined {
    if (typeof prop !== 'object' || prop === null) {
        return prop; // Retorna o valor direto se não for um objeto ou for null
    }
    let selectedBreakpoint: T | undefined = undefined;

    Object.entries(breakpoints).forEach(([key, value]) => {
        if (screenSize >= value && key in prop) {
            selectedBreakpoint = (prop as any)[key];
        }
    });

    return selectedBreakpoint;
}

// Função resolveStyles para aplicar o estilo dinamicamente
export function resolveStyles(
    styleProps: BaseViewTypesProps,
    screenSize: number
): ViewStyle & FlexStyle {
    let resolvedStyle: Record<string, any> = {};

    Object.keys(styleProps).forEach((key) => {
        const propValue = styleProps[key as keyof BaseViewTypesProps];
        resolvedStyle[key] = resolveStyle(propValue, screenSize);
    });

    return resolvedStyle as ViewStyle & FlexStyle;
}
