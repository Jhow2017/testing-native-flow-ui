import { useState } from 'react';

import { Input } from 'native-flow';
import { Link, StatusBar } from 'native-flow';
import { Flex } from 'native-flow';

export default function InputPage() {
    const [textValue, setTextValue] = useState<string>('');

    const onChangeSearchText = (text: string) => {
        setTextValue(text);
    };

    return (
        <>
            <StatusBar
                style="dark"
                translucent
                setBackgroundColor={['#FF0000', true]}
                setHidden={[false, 'slide']}
                setNetworkActivityIndicatorVisible={true}
                setTranslucent={true}
            />

            <Flex
                flex={1}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
                gap={24}
                backgroundColor={'green'}
            >
                <Input
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

                <Link
                    href="/"
                    fontSize={32}
                    backgroundColor={{
                        xs: '#fff',
                        md: 'red',
                    }}
                >
                    voltar {textValue}
                </Link>
            </Flex>
        </>
    );
}
