import React, { useState, useEffect } from 'react';
import { LayoutAnimation, Platform, UIManager } from 'react-native';
import { DsBox, DsFlex, DsIcon, DsText } from 'native-flow';

import { DsAccordionTypes } from './types';

const DsAccordian: React.FC<DsAccordionTypes> = (props) => {
    const { title, titleStyle, content, contentStyle, ...attr } = props;

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental &&
                UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }, []);

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    };

    return (
        <DsBox {...attr}>
            <DsFlex
                justifyContent={'space-between'}
                alignItems={'center'}
                height={56}
                paddingLeft={25}
                paddingRight={18}
                backgroundColor={'#DCDCDC'}
                onPress={toggleExpand}
            >
                <DsText
                    size="medium"
                    color={'#666666'}
                    fontWeight="900"
                    {...titleStyle}
                >
                    {title}
                </DsText>
                <DsIcon
                    icon={expanded ? 'close' : 'close'}
                    size={'small'}
                    color={'#666666'}
                    onPress={toggleExpand}
                />
            </DsFlex>
            {/* @ts-ignore */}
            <DsBox height={1} color={'#fff'} width="100%" />
            {expanded && (
                <DsBox padding={16}>
                    <DsText {...contentStyle}>{content}</DsText>
                </DsBox>
            )}
        </DsBox>
    );
};

export default DsAccordian;
