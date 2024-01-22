import { Link } from 'native-flow';
import { Box } from 'native-flow';

export default function LinkPage() {
    return (
        <Box
            flex={1}
            justifyContent={'center'}
            alignItems={'center'}
            //backgroundColor={'yellow'}
            backgroundColor={{
                ':w[200,500]': 'white',
                ':w[500,900]': 'blue',
            }}
        >
            <Link
                href="/"
                fontSize={32}
                // justifyContent={{ xs: 'center' }}
                // alignItems={{ xs: 'center', md: 'center' }}
                // backgroundColor={{ xs: 'red', md: 'blue' }}
                // backgroundColor={{
                //     ':w[200,500]': 'red',
                //     ':w[500,900]': 'blue',
                // }}
                _platform={(e) => ({
                    //backgroundColor: e.OS === 'ios' ? 'red' : 'blue',
                    marginTop: e.OS === 'ios' ? 150 : 300,
                })}
                //_css={'background-color: red;'}
                _css={{
                    xs: 'background-color: red',
                    md: 'background-color: green ',
                }}
                // style={{
                //     backgroundColor: 'red',
                // }}
            >
                voltar
            </Link>
        </Box>
    );
}
