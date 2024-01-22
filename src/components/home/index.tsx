import { Link, Flex } from 'native-flow';

export default function Home() {
    return (
        <Flex
            flex={1}
            width={'100%'}
            justifyContent={{ xs: 'center' }}
            alignItems={{ xs: 'center', md: 'center' }}
            flexDirection={'column'}
            gap={4}
            backgroundColor={{
                xs: 'blue',
                sm: 'red',
            }}
            // style={{
            //     backgroundColor: 'red',
            // }}
        >
            <Link
                href="/link/"
                fontSize={{ xs: 32, sm: 42 }}
                _platform={(e) => ({
                    //backgroundColor: e.OS === 'ios' ? 'red' : 'blue',
                    marginTop: e.OS === 'ios' ? 0 : 100,
                })}
                // style={{
                //     fontSize: 24,
                // }}
            >
                Link
            </Link>
            <Link href="/modal/" fontSize={{ xs: 32, sm: 50 }}>
                Modal
            </Link>
            <Link href="/text/" fontSize={{ xs: 32, sm: 50 }}>
                Text
            </Link>
            <Link href="/box/" fontSize={{ xs: 32, sm: 50 }}>
                Box
            </Link>
            <Link href="/button/" fontSize={{ xs: 32, sm: 50 }}>
                Button
            </Link>
            <Link href="/input/" fontSize={{ xs: 32, sm: 50 }}>
                Input
            </Link>
            <Link href="/icon/" fontSize={{ xs: 32, sm: 50 }}>
                Icon/Flex
            </Link>
            <Link href="/carousel/" fontSize={{ xs: 32, sm: 50 }}>
                Carousel
            </Link>
            <Link href="/accordion/" fontSize={{ xs: 32, sm: 50 }}>
                Accordion
            </Link>
            <Link href="/shadow-box/" fontSize={{ xs: 32, sm: 50 }}>
                ShadowBox
            </Link>
        </Flex>
    );
}
