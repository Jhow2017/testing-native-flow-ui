import { useState, useEffect, useMemo } from 'react';
import { Dimensions } from 'react-native';

// types
import { BaseViewTypesProps } from '@ds/core/types/view';

// hooks
import { debounce } from './debounce';
import { resolveStyles } from '@ds/hooks/resolveStyles';

const useResponsiveStyles = (rest: BaseViewTypesProps) => {
    const [screenWidth, setScreenWidth] = useState(
        Dimensions.get('window').width
    );

    useEffect(() => {
        const debouncedHandleResize = debounce(({ window }) => {
            setScreenWidth(window.width);
        }, 100);

        const subscription = Dimensions.addEventListener(
            'change',
            debouncedHandleResize
        );
        return () => {
            subscription?.remove();
            debouncedHandleResize.cancel();
        };
    }, []);

    const style = useMemo(() => {
        return resolveStyles(rest, screenWidth);
    }, [rest, screenWidth]);

    return style;
};

export default useResponsiveStyles;
