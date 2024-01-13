import { useState } from 'react';

import DsInput from '@ds/components/form/input';
import { DsLink, DsStatusBar } from '@ds/components/global';
import { DsFlex } from '@ds/components/layout';

export default function InputPage() {
    const [textValue, setTextValue] = useState<string>('');

    const onChangeSearchText = (text: string) => {
        setTextValue(text);
    };

    return (
        <>
            <DsStatusBar
                style="dark"
                translucent
                setBackgroundColor={['#FF0000', true]}
                setHidden={[false, 'slide']}
                setNetworkActivityIndicatorVisible={true}
                setTranslucent={true}
            />

            <DsFlex
                flex={1}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
                gap={24}
                backgroundColor={'green'}
            >
                <DsInput
                    value={textValue}
                    onChangeText={onChangeSearchText}
                    placeholder="Digite seu texto"
                    // style={{
                    //     backgroundColor: 'red',
                    //     width: '100%',
                    //     height: 60,
                    //     borderRadius: 10,
                    //     borderWidth: 1,
                    //     borderColor: 'white',
                    //     fontSize: 24,
                    //     fontFamily: 'Inter_300Light',
                    // }}
                    type={'search'}
                    size={'small'}
                    numberOfLines={4}
                    maxLength={40}
                    fontFamily={'Inter_300Light'}
                    // backgroundColor={{
                    //     xs: 'red',
                    //     md: '#000',
                    // }}
                    // fontSize={{
                    //     xs: 16,
                    //     sm: 24,
                    // }}
                    margin={16}
                    // color={'blue'}
                    // placeholderTextColor={'blue'}
                    // _platform={(e) => ({
                    //     backgroundColor: e.OS === 'ios' ? 'red' : 'blue',
                    //     marginTop: e.OS === 'ios' ? 150 : 300,
                    // })}
                    // _css={{
                    //     xs: 'background-color: blue;',
                    //     md: 'background-color: red; ',
                    // }}
                />

                <DsLink
                    href="/"
                    fontSize={32}
                    backgroundColor={{
                        xs: '#fff',
                        md: 'red',
                    }}
                >
                    voltar {textValue}
                </DsLink>
            </DsFlex>
        </>
    );
}
