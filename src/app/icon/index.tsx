import { DsIcon, DsLink } from 'native-flow-ui';
import { DsBox, DsFlex } from 'native-flow-ui';

export default function IconPage() {
    return (
        <DsBox
            flex={1}
            justifyContent={'center'}
            alignItems={'center'}
            // backgroundColor={{
            //     xs: 'red',
            //     sm: 'yellow',
            // }}
            backgroundColor={{
                ':w[200,500]': 'blue',
                ':w[500,900]': 'yellow',
            }}
        >
            <DsFlex
                gap={{
                    ':w[200,500]': 24,
                    ':w[500,900]': 100,
                }}
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
