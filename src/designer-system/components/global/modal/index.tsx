import useModalAnimation from '@ds/core/hook/useModalAnimation';
import React, { ReactNode } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    GestureResponderEvent,
} from 'react-native';

interface DsModalTypes {
    children: ReactNode;
    show: boolean;
    close: (event: GestureResponderEvent) => void;
}

const DsModal: React.FC<DsModalTypes> = ({ show, close, children }) => {
    const animationState = useModalAnimation(show);
    return (
        <Animated.View
            style={[
                styles.container,
                {
                    opacity: animationState.opacity,
                    transform: [{ translateY: animationState.container }],
                },
            ]}
        >
            <Animated.View
                style={[
                    styles.modal,
                    {
                        transform: [{ translateY: animationState.modal }],
                    },
                ]}
            >
                <View style={styles.indicator} />

                {children}

                {close && (
                    <TouchableOpacity style={styles.btn} onPress={close}>
                        <Text style={{ color: '#fff' }}>Close</Text>
                    </TouchableOpacity>
                )}
            </Animated.View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        zIndex: 99999,
    },
    modal: {
        bottom: 0,
        position: 'absolute',
        height: '50%',
        backgroundColor: '#fff',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingLeft: 25,
        paddingRight: 25,
    },
    indicator: {
        width: 50,
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 5,
    },
    text: {
        marginTop: 50,
        textAlign: 'center',
    },
    btn: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#9b59b6',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
});

export default DsModal;
