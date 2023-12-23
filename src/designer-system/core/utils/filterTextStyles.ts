import { StyledComponents } from '../styles';

interface BaseViewTypesProps {
    [key: string]: any;
}

export const filterTextStyles = <T extends BaseViewTypesProps>(
    styleProps: T,
    as: keyof typeof StyledComponents
): T => {
    if (as !== 'Text') {
        return styleProps;
    }

    const filteredStyles: Partial<T> = {};

    Object.keys(styleProps).forEach((key) => {
        if (styleProps[key] !== undefined) {
            filteredStyles[key as keyof T] = styleProps[key];
        }
    });

    return filteredStyles as T;
};
