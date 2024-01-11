import React, { useEffect } from 'react';
import {
    StatusBar,
    StatusBarProps,
    StatusBarStyle,
    setStatusBarBackgroundColor,
    setStatusBarHidden,
    setStatusBarNetworkActivityIndicatorVisible,
    setStatusBarTranslucent,
} from 'expo-status-bar';
import { Platform, StatusBarAnimation } from 'react-native';

interface DsStatusBarProps extends StatusBarProps {
    style: StatusBarStyle;
    setBackgroundColor?: [string, boolean?]; // Cor de fundo e opcionalmente se é animado
    setHidden?: [boolean, StatusBarAnimation?]; // Esconder e opcionalmente a animação
    setNetworkActivityIndicatorVisible?: boolean; // Visibilidade do indicador de atividade de rede
    setTranslucent?: boolean; // Translucidez da barra de status
}

const DsStatusBar: React.FC<DsStatusBarProps> = (props) => {
    const {
        style,
        setBackgroundColor,
        setHidden,
        setNetworkActivityIndicatorVisible,
        setTranslucent,
        ...attr
    } = props;

    useEffect(() => {
        if (Platform.OS === 'android' && setBackgroundColor) {
            const [color, animated = false] = setBackgroundColor;
            setStatusBarBackgroundColor(color, animated);
        }
        if (setHidden) {
            const [hidden, animation = 'none'] = setHidden;
            setStatusBarHidden(hidden, animation);
        }
        if (
            Platform.OS === 'ios' &&
            setNetworkActivityIndicatorVisible !== undefined
        ) {
            setStatusBarNetworkActivityIndicatorVisible(
                setNetworkActivityIndicatorVisible
            );
        }
        if (Platform.OS === 'android' && setTranslucent !== undefined) {
            setStatusBarTranslucent(setTranslucent);
        }
    }, [
        setBackgroundColor,
        setHidden,
        setNetworkActivityIndicatorVisible,
        setTranslucent,
    ]);

    return <StatusBar style={style || 'auto'} translucent {...attr} />;
};

export default DsStatusBar;
