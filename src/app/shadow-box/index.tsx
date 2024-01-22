import { Box, Flex, Link, ShadowBox, Text } from 'native-flow';

export default function ShadowBoxPage() {
    return (
        <Box
            flex={1}
            width={'100%'}
            justifyContent={{ xs: 'center' }}
            alignItems={{ xs: 'center', md: 'center' }}
            backgroundColor={{ xs: '#fff', md: 'green' }}
        >
            <Flex
                flexDirection={'column'}
                gap={32}
                width={'100%'}
                padding={{
                    xs: 24,
                    md: 32,
                }}
            >
                <ShadowBox
                    width={'100%'}
                    height={200}
                    justifyContent={'center'}
                    alignItems={'center'}
                    padding={16}
                    // boxShadow={{
                    //     xs: '0px 1px 3px red',
                    //     md: '0px 1px 5px #000',
                    // }}
                >
                    <Text
                        color="#000"
                        fontSize={{
                            xs: 16,
                            md: 24,
                        }}
                        textAlign={'center'}
                    >
                        Shadow-box com escrita/sintaxe css e convertida para
                        sintaxe aceita pelo React Native
                    </Text>
                </ShadowBox>
                <Box
                    borderRadius={10}
                    padding={{ sm: 24, md: 24, lg: 32 }}
                    backgroundColor="red"
                    width={'100%'}
                    height={200}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Text
                        color="#000"
                        fontSize={{
                            xs: 24,
                            md: 32,
                        }}
                    >
                        Box sem shadow-box
                    </Text>
                </Box>
            </Flex>

            <Link href="/" fontSize={32}>
                Voltar
            </Link>
        </Box>
    );
}
