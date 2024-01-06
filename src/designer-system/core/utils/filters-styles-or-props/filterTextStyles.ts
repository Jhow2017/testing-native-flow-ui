import { cssTextValue } from '../constants';

type CSSTextValue = (typeof cssTextValue)[number];

type TextStylesProps = Partial<Record<CSSTextValue, any>>;

export default function filterTextStyles(
    props: Record<string, any>
): TextStylesProps {
    const filteredProps: TextStylesProps = {};

    Object.keys(props).forEach((key) => {
        if (cssTextValue.includes(key as CSSTextValue)) {
            filteredProps[key as CSSTextValue] = props[key];
        }
    });

    return filteredProps;
}
