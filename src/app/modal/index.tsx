import { useState } from 'react';

import { Icon, Link, Modal } from 'native-flow';
import { Box } from 'native-flow';
import { Text } from 'native-flow';

export default function Home() {
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <Box
            flex={1}
            width={'100%'}
            justifyContent={{ xs: 'center' }}
            alignItems={{ xs: 'center', md: 'center' }}
            backgroundColor={{ xs: 'blue', md: 'blue' }}
            // backgroundColor={{
            //     ':w[200,500]': 'red',
            //     ':w[500,900]': 'blue',
            // }}
            // _platform={(e) => ({
            //     backgroundColor: e.OS === 'ios' ? 'red' : 'blue',
            //     marginTop: e.OS === 'ios' ? 150 : 300,
            // })}
            // _css={'background-color: red;'}
            // _css={{
            //     xs: 'background-color: blue;',
            //     md: 'background-color: green; ',
            // }}
        >
            <Icon
                icon="close"
                color="#fff"
                fontSize={24}
                onPress={() => setModalVisible(true)}
                //backgroundColor={'#000'}
                // marginTop={{
                //     xs: 100,
                // }}
                // style={{
                //     backgroundColor: 'green',
                // }}
                // _platform={(e) => ({
                //     backgroundColor: e.OS === 'ios' ? 'blue' : 'red',
                //     marginTop: e.OS === 'ios' ? 150 : 300,
                // })}
                flexDirection={{
                    xs: 'row',
                }}
                alignItems={'center'}
                gap={2}
                stylesText={{
                    color: '#b19b9b',
                    fontSize: 18,
                }}
            >
                Abrir o Modal
            </Icon>
            <Modal
                visible={isModalVisible}
                onClose={() => setModalVisible(false)}
                backgroundColor={{
                    xs: '#fff',
                    md: 'red',
                }}
            >
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vitae massa odio. Quisque ante sem, tempor eget massa
                    vel, mollis tincidunt metus. Ut sed felis lectus. Nam semper
                    molestie urna, quis ultricies quam semper ut. Maecenas
                    aliquet id urna a convallis. Class aptent taciti sociosqu ad
                    litora torquent per conubia nostra, per inceptos himenaeos.
                    Maecenas leo lectus, dictum vitae erat eget, luctus dapibus
                    sapien. Integer at hendrerit quam. Vivamus tempor, arcu non
                    fringilla laoreet, enim nibh porttitor enim, eget
                    pellentesque eros nulla congue neque. Suspendisse et
                    lobortis enim, nec fermentum est. Aliquam accumsan viverra
                    vehicula. Proin tempus sagittis auctor. Vivamus quam ligula,
                    laoreet eget eros et, hendrerit iaculis risus. Nam a nulla
                    in purus fermentum rhoncus eu et erat. Aliquam tempus felis
                    lorem, id hendrerit tortor vestibulum ac.
                </Text>
            </Modal>
            <Link href="/" fontSize={32}>
                Voltar
            </Link>
        </Box>
    );
}
