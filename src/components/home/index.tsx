import { DsLink } from '@ds/components/global';
import { DsBox } from '@ds/components/layout';

export default function Home() {
    return (
        <DsBox
            flex={1}
            width={'100%'}
            justifyContent={{ xs: 'center' }}
            alignItems={{ xs: 'center', md: 'center' }}
            backgroundColor={{ xs: 'blue', md: 'blue' }}
        >
            <DsLink href="/link/">Link</DsLink>
            <DsLink href="/modal/">Modal</DsLink>
            <DsLink href="/text/">Text</DsLink>
            <DsLink href="/box/">Box</DsLink>
        </DsBox>
    );
}
