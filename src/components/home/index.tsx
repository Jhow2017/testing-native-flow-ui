import { DsBox, DsFlex } from '@ds/components/layout';
import { DsText } from '@ds/components/typography';

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
            _platform={(e) => ({
                backgroundColor: e.OS === 'ios' ? 'red' : 'blue',
                marginTop: e.OS === 'ios' ? 150 : 300,
            })}
            // _css={'background-color: red;'}
            // _css={{
            //     xs: 'background-color: blue;',
            //     md: 'background-color: green; ',
            // }}
        >
            <DsText
                color="#fff"
                textTransform="capitalize"
                numberOfLines={1}
                ellipsizeMode="tail"
                width={'80%'}
                fontSize={24}
                // backgroundColor={{
                //     ':w[200,500]': 'red',
                //     ':w[500,900]': 'blue',
                // }}
                // _platform={(e) => ({
                //     backgroundColor: e.OS === 'ios' ? 'green' : 'red',
                //     marginTop: e.OS === 'ios' ? 150 : 300,
                // })}
                // _css={'background-color: red;'}
                // _css={{
                //     xs: 'background-color: red;',
                //     md: 'background-color: green; ',
                // }}
                // style={{
                //     backgroundColor: 'red',
                // }}
            >
                texto bem grande texto bem grande texto bem grande texto bem
                grande
            </DsText>
        </DsFlex>
    );
}
