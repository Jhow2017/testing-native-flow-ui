import { DsIcon, DsLink } from '@ds/components/global';
import { DsBox, DsFlex } from '@ds/components/layout';

export default function IconPage() {
    return (
        <DsBox
            flex={1}
            justifyContent={'center'}
            alignItems={'center'}
            backgroundColor={'yellow'}
            // backgroundColor={{
            //     ':w[200,500]': 'white',
            //     ':w[500,900]': 'blue',
            // }}
        >
            <DsFlex
                gap={100}
                alignItems={'center'}
                justifyContent={'center'}
                backgroundColor={'green'}
                padding={24}
            >
                <DsIcon
                    icon="close"
                    color="red"
                    size="xxlarge"
                    onPress={() => console.log('Clicou no xxlarge')}
                />
                <DsIcon icon="close" color="red" size="xlarge" />
                <DsIcon icon="close" color="red" size="large" />
                <DsIcon icon="close" color="red" size="medium" />
                <DsIcon icon="close" color="red" size="small" />
                <DsIcon icon="close" color="red" size="xsmall" />
            </DsFlex>

            <DsLink href="/" fontSize={32} marginTop={32}>
                voltar
            </DsLink>
        </DsBox>
    );
}
