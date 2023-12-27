import React from 'react';
import { MotiView } from 'moti';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

// type
import { DsModalTypes } from './type';

import useModalAnimation from '@ds/core/hook/useModalAnimation';
import { DsBox } from '@ds/components/layout';
import { DsBoxType } from '@ds/components/layout/box';

const DsModal: React.FC<DsModalTypes> = (props) => {
    const {
        visible,
        onClose,
        children,
        animation = 'fade',
        transition,
        ...attr
    } = props;

    const modalAnimationState = useModalAnimation(visible, animation);

    const handleAnimationComplete = () => {
        if (modalAnimationState.current === 'closed') {
            onClose();
        }
    };

    return (
        <MotiView
            state={modalAnimationState}
            style={styles.container}
            transition={{
                type: transition?.type ?? 'timing',
                duration: transition?.duration ?? 500,
            }}
            onDidAnimate={(property: string, finished: boolean) => {
                if (property === 'opacity' && finished) {
                    handleAnimationComplete();
                }
            }}
        >
            <DsBox
                justifyContent="space-between"
                position="absolute"
                backgroundColor="#fff"
                height="auto"
                borderRadius={24}
                padding={24}
                marginHorizontal={12}
                {...(attr as DsBoxType)}
            >
                <DsBox flex={1}>{children}</DsBox>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => modalAnimationState.transitionTo('closed')}
                >
                    <Text style={{ color: '#fff' }}>Close</Text>
                </TouchableOpacity>
            </DsBox>
        </MotiView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(22, 11, 11, 0.5)',
        zIndex: 9999,
        position: 'absolute',
        width: '100%',
        height: '100%',
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
