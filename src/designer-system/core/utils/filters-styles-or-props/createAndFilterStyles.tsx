import { createStyleSheet, useStyles } from '@ds/config/unistyles';
import { cssValue } from '../constants';

interface StyleObject {
    [key: string]: any;
}

const createAndFilterStyles = (rest: StyleObject) => {
    const stylesheet = createStyleSheet(() => ({
        flexStyle: {
            ...rest,
        },
    }));

    const { styles } = useStyles(stylesheet);

    const filterStyles = (styleObject: StyleObject): StyleObject => {
        return Object.keys(styleObject)
            .filter((key) => cssValue.includes(key))
            .reduce((obj, key) => {
                obj[key] = styleObject[key];
                return obj;
            }, {} as StyleObject);
    };

    return filterStyles(styles.flexStyle);
};
export default createAndFilterStyles;
