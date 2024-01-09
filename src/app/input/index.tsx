import { useState } from 'react';

import DsInput from '@ds/components/form/input';
import { DsLink } from '@ds/components/global';
import { DsBox } from '@ds/components/layout';

export default function InputPage() {
    const [textValue, setTextValue] = useState<string>('');

    const onChangeSearchText = (text: string) => {
        setTextValue(text);
    };

    return (
        <DsBox
            flex={1}
            justifyContent={'center'}
            alignItems={'center'}
            backgroundColor={'#000'}
        >
            <DsInput
                value={textValue}
                onChangeText={onChangeSearchText}
                placeholder="Digite seu texto"
                // style={{
                //     backgroundColor: 'blue',
                //     width: '100%',
                //     height: 50,
                //     borderRadius: 10,
                //     borderWidth: 1,
                //     borderColor: 'white',
                //     color: 'red',
                // }}
                type={'search'}
                size={'small'}
                numberOfLines={4}
                maxLength={40}
            />
            <DsLink href="/" fontSize={32} backgroundColor={'red'}>
                voltar {textValue}
            </DsLink>
        </DsBox>
    );
}
