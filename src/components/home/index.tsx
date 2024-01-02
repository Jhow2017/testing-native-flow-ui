import { DsLink } from '@ds/components/global';
import { DsBox, DsFlex } from '@ds/components/layout';

export default function Home() {
    return (
        <DsFlex
            as="View"
            flex={1}
            width={'100%'}
            justifyContent={{ xs: 'center' }}
            alignItems={{ xs: 'center', md: 'center' }}
            flexDirection={'column'}
            gap={4}
            // backgroundColor={{
            //     xs: 'red',
            //     sm: 'blue',
            // }}
            style={{
                backgroundColor: 'red',
            }}
        >
            <DsLink
                href="/link/"
                fontSize={{ xs: 32, sm: 50 }}
                _platform={(e) => ({
                    //backgroundColor: e.OS === 'ios' ? 'red' : 'blue',
                    marginTop: e.OS === 'ios' ? 150 : 300,
                })}
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
        </DsFlex>
    );
}
