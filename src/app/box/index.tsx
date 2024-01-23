import DsBox from '@ds/box';
import { Link } from 'native-flow';

export default function BoxPage() {
    return (
        <DsBox
            flex={1}
            width={'100%'}
            justifyContent={{ xs: 'center' }}
            alignItems={{ xs: 'center', md: 'center' }}
            backgroundColor={{ xs: 'green', md: 'red' }}
            // backgroundColor={{
            //     ':w[200,500]': 'green',
            //     ':w[500,900]': 'blue',
            // }}
            // _platform={(e) => ({
            //     backgroundColor: e.OS === 'ios' ? 'red' : 'blue',
            //     marginTop: e.OS === 'ios' ? 150 : 300,
            // })}
            // _css={'background-color: red;'}
            // _css={{
            //     xs: 'background-color: blue;',
            //     md: 'background-color: green; ',
            // }}
        >
            <Link href="/" fontSize={32}>
                Voltar
            </Link>
        </DsBox>
    );
}
