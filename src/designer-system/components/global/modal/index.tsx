import React, { useEffect } from 'react';
import { MotiView, useAnimationState } from 'moti';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// type
import { DynamicModalProps } from './type';

// data animations
import { animations } from './animations';

const DsModal: React.FC<DynamicModalProps> = (props) => {
    const { visible, onClose, children, animation = 'fade', ...attr } = props;

    const currentAnimation = animations[animation];

    const modalAnimationState = useAnimationState({
        from: currentAnimation.from,
        open: currentAnimation.open,
        closed: currentAnimation.closed,
    });

    useEffect(() => {
        modalAnimationState.transitionTo(visible ? 'open' : 'closed');
    }, [visible]);

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
                type: 'timing',
                duration: 500,
            }}
            onDidAnimate={(property, finished) => {
                if (property === 'opacity' && finished) {
                    handleAnimationComplete();
                }
            }}
            {...(attr as any)}
        >
            <View style={styles.modal}>
                <View style={styles.indicator} />
                <View style={styles.content}>{children}</View>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => modalAnimationState.transitionTo('closed')}
                >
                    <Text style={{ color: '#fff' }}>Close</Text>
                </TouchableOpacity>
            </View>
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
    modal: {
        flex: 1,
        justifyContent: 'space-between', // Adiciona espaço entre o conteúdo e o botão
        bottom: 0,
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 25, // Adiciona padding na parte superior
        paddingBottom: 25, // Adiciona padding na parte inferior
        paddingLeft: 25,
        paddingRight: 25,
    },
    content: {
        // Estilo para o conteúdo do modal
        flex: 1, // Isso permite que o conteúdo ocupe o espaço disponível
    },
    indicator: {
        width: 50,
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 5,
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
