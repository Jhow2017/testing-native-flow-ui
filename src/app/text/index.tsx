import { DsBox, DsLink, DsText } from 'native-flow';

export default function Text() {
    return (
        <DsBox
            flex={1}
            width={'100%'}
            justifyContent={{ xs: 'center' }}
            alignItems={{ xs: 'center', md: 'center' }}
            backgroundColor={{ xs: 'blue', md: 'blue' }}
        >
            <DsText
                color="#fff"
                textTransform="capitalize"
                numberOfLines={1}
                ellipsizeMode="tail"
                width={'80%'}
                size="xlarge"
                //fontSize={{ xs: 32, md: 50 }}
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
                //     xs: 'background-color: black;',
                //     md: 'background-color: green; ',
                // }}
                // style={{
                //     backgroundColor: 'red',
                // }}
            >
                texto bem grande texto bem grande texto bem grande texto bem
                grande
            </DsText>

            <DsLink href="/" fontSize={32}>
                voltar
            </DsLink>
        </DsBox>
    );
}
