import { DsBox, DsFlex } from '@ds/layout';
import { DsText } from '@ds/components/typography';

export default function Home() {
    return (
        <DsFlex
            flex={1}
            justifyContent={{ xs: 'center' }}
            alignItems={{ xs: 'center', md: 'center' }}
            gap={{ xs: 24, md: 24 }}
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
            <DsText color="green" fontSize={32}>
                Olá!!
            </DsText>
            <DsText>Olá!!</DsText>
        </DsFlex>
    );
}
