import { DsText } from '@ds/components/typography';
import { DsFlex, DsBox } from '@ds/layout';

export default function TabOneScreen() {
    return (
        <DsBox
            flex={1}
            justifyContent={{ sm: 'center' }}
            alignItems={{ sm: 'center', md: 'center' }}
            //backgroundColor={{ sm: 'blue', md: 'blue' }}
            gap={{ sm: 24, md: 24 }}
            // _platform={(e) => ({
            //     backgroundColor: e.OS === 'ios' ? 'red' : 'blue',
            //     marginTop: e.OS === 'ios' ? 0 : 200,
            // })}
            // _css={'background-color: red;'}
            _css={{
                sm: 'background-color: blue;',
                md: 'background-color: green; ',
            }}
        >
            <DsText color="green" fontSize={24}>
                Olá!!
            </DsText>
            <DsText>Olá!!</DsText>
        </DsBox>
    );
}
