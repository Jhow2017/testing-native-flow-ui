import { DsLink, DsFlex } from 'native-flow';

export default function Home() {
    return (
        <DsFlex
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
            <DsLink
                href="/link/"
                fontSize={{ xs: 32, sm: 42 }}
                _platform={(e) => ({
                    //backgroundColor: e.OS === 'ios' ? 'red' : 'blue',
                    marginTop: e.OS === 'ios' ? 150 : 300,
                })}
                // style={{
                //     fontSize: 24,
                // }}
            >
                Link
            </DsLink>
            <DsLink href="/modal/" fontSize={{ xs: 32, sm: 50 }}>
                Modal
            </DsLink>
            <DsLink href="/text/" fontSize={{ xs: 32, sm: 50 }}>
                Text
            </DsLink>
            <DsLink href="/box/" fontSize={{ xs: 32, sm: 50 }}>
                Box
            </DsLink>
            <DsLink href="/button/" fontSize={{ xs: 32, sm: 50 }}>
                Button
            </DsLink>
            <DsLink href="/input/" fontSize={{ xs: 32, sm: 50 }}>
                Input
            </DsLink>
            <DsLink href="/icon/" fontSize={{ xs: 32, sm: 50 }}>
                icon/Flex
            </DsLink>
        </DsFlex>
    );
}
