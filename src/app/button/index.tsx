import { DsButton, DsLink } from 'native-flow-ui';
import { DsBox } from 'native-flow-ui';

export default function Button() {
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
            <DsButton
                variant="tertiary"
                size={{ xs: 'medium', md: 'xlarge' }}
                icon="close"
                iconPosition="right"
            >
                Botão
            </DsButton>
            <DsLink href="/" fontSize={32}>
                voltar
            </DsLink>
        </DsBox>
    );
}
