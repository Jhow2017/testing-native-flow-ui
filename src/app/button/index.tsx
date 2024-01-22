import { Button, Link } from 'native-flow';
import { Box } from 'native-flow';

export default function ButtonPage() {
    return (
        <Box
            flex={1}
            justifyContent={'center'}
            alignItems={'center'}
            backgroundColor={'yellow'}
            // backgroundColor={{
            //     ':w[200,500]': 'white',
            //     ':w[500,900]': 'blue',
            // }}
        >
            <Button
                variant="tertiary"
                size={{ xs: 'medium', md: 'xlarge' }}
                icon="close"
                iconPosition="right"
            >
                Botão
            </Button>
            <Link href="/" fontSize={32}>
                voltar
            </Link>
        </Box>
    );
}
