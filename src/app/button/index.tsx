import { DsButton, DsLink } from '@ds/components/global';
import { DsBox } from '@ds/components/layout';

export default function Button() {
    return (
        <DsBox
            flex={1}
            justifyContent={'center'}
            alignItems={'center'}
            //backgroundColor={'yellow'}
            backgroundColor={{
                ':w[200,500]': 'white',
                ':w[500,900]': 'blue',
            }}
        >
            <DsButton
                variant="primary-dark"
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
