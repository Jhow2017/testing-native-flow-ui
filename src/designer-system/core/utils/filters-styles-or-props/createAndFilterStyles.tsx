import { createStyleSheet, useStyles } from '@ds/config/unistyles';
import { cssValue as defaultCssValue } from '../constants';

interface StyleObject {
    [key: string]: any;
}

const createAndFilterStyles = (
    rest: StyleObject,
    customCssValues?: string[]
) => {
    const cssValuesToUse = customCssValues || defaultCssValue;

    const stylesheet = createStyleSheet(() => ({
        flexStyle: {
            ...rest,
        },
    }));

    const { styles } = useStyles(stylesheet);

    const filterStyles = (styleObject: StyleObject): StyleObject => {
        return Object.keys(styleObject)
            .filter((key) => cssValuesToUse.includes(key))
            .reduce((obj, key) => {
                obj[key] = styleObject[key];
                return obj;
            }, {} as StyleObject);
    };

    return filterStyles(styles.flexStyle);
};
export default createAndFilterStyles;
