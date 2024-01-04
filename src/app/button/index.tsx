import { DsLink } from '@ds/components/global';
import DsButton from '@ds/components/global/button';
import { DsBox } from '@ds/components/layout';

export default function Link() {
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
                size="medium"
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
