import { DsLink } from '@ds/components/global';
import { DsBox } from '@ds/components/layout';

export default function Box() {
    return (
        <DsBox
            flex={1}
            width={'100%'}
            justifyContent={{ xs: 'center' }}
            alignItems={{ xs: 'center', md: 'center' }}
            //backgroundColor={{ xs: 'green', md: 'red' }}
            backgroundColor={{
                ':w[200,500]': 'red',
                ':w[500,900]': 'blue',
            }}
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
            <DsLink
                href="/link/"
                style={{
                    fontSize: 25,
                }}
            >
                Voltar
            </DsLink>
        </DsBox>
    );
}
