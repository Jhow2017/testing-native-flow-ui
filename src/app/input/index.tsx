import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

import DsInput from '@ds/components/form/input';
import { DsLink } from '@ds/components/global';
import { DsBox } from '@ds/components/layout';

export default function InputPage() {
    const [textValue, setTextValue] =
        useState<NativeSyntheticEvent<TextInputChangeEventData>>();
    console.log('showPassword', textValue);

    return (
        <DsBox
            flex={1}
            justifyContent={'center'}
            alignItems={'center'}
            backgroundColor={'black'}
        >
            <DsInput
                type={'search'}
                size={'small'}
                onChange={(e) => setTextValue(e)}
            />
            <DsLink href="/" fontSize={32} backgroundColor={'red'}>
                voltar
            </DsLink>
        </DsBox>
    );
}
