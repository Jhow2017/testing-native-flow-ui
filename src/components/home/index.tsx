import { DsLink } from '@ds/components/global';
import { DsBox } from '@ds/components/layout';

export default function Home() {
    return (
        <DsBox
            as="View"
            flex={1}
            width={'100%'}
            justifyContent={{ xs: 'center' }}
            alignItems={{ xs: 'center', md: 'center' }}
            // backgroundColor={{
            //     xs: 'red',
            //     sm: 'blue',
            // }}
            // style={{
            //     backgroundColor: '#000',
            // }}
        >
            <DsLink
                href="/link/"
                fontSize={{ xs: 32, sm: 50 }}
                style={{ backgroundColor: 'green' }}
            >
                Link2
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
        </DsBox>
    );
}
