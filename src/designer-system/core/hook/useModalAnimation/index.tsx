import { useState, useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const useModalAnimation = (isVisible: boolean) => {
    const [state, setState] = useState({
        opacity: new Animated.Value(0),
        container: new Animated.Value(height),
        modal: new Animated.Value(height),
    });

    const openModal = () => {
        Animated.sequence([
            Animated.timing(state.container, {
                toValue: 0,
                duration: 100,
                useNativeDriver: false,
            }),
            Animated.timing(state.opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.spring(state.modal, {
                toValue: 0,
                bounciness: 5,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const closeModal = () => {
        Animated.sequence([
            Animated.timing(state.modal, {
                toValue: height,
                duration: 250,
                useNativeDriver: true,
            }),
            Animated.timing(state.opacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(state.container, {
                toValue: height,
                duration: 100,
                useNativeDriver: false,
            }),
        ]).start();
    };

    useEffect(() => {
        if (isVisible) {
            openModal();
        } else {
            closeModal();
        }
    }, [isVisible]);

    return state;
};

export default useModalAnimation;
