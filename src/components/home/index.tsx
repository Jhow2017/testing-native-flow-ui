import DsFlex from '@ds/components/layout/box';
import { Text } from 'react-native';

export default function Home() {
    return (
        <DsFlex
            flex={1}
            justifyContent={{ xs: 'center' }}
            alignItems={{ xs: 'center', md: 'center' }}
            backgroundColor={{ xs: 'blue', md: 'blue' }}
            // backgroundColor={{
            //     ':w[200,500]': 'red',
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
            <Text>Olá</Text>
        </DsFlex>
    );
}
