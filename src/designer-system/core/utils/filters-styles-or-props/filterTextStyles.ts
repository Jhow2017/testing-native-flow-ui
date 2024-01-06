import { cssTextOnlyPropsValue } from '../constants';

type CSSTextValue = (typeof cssTextOnlyPropsValue)[number];

type TextStylesProps = Partial<Record<CSSTextValue, any>>;

export default function filterTextStyles(
    props: Record<string, any>
): TextStylesProps {
    const filteredProps: TextStylesProps = {};

    Object.keys(props).forEach((key) => {
        if (cssTextOnlyPropsValue.includes(key as CSSTextValue)) {
            filteredProps[key as CSSTextValue] = props[key];
        }
    });

    return filteredProps;
}
