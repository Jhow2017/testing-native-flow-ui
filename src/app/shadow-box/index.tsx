import { DsBox, DsFlex, DsLink, DsShadowBox, DsText } from 'native-flow';

export default function ShadowBoxPage() {
    return (
        <DsBox
            flex={1}
            width={'100%'}
            justifyContent={{ xs: 'center' }}
            alignItems={{ xs: 'center', md: 'center' }}
            backgroundColor={{ xs: '#fff', md: 'green' }}
        >
            <DsFlex
                flexDirection={'column'}
                gap={32}
                width={'100%'}
                padding={{
                    xs: 24,
                    md: 32,
                }}
            >
                <DsShadowBox
                    width={'100%'}
                    height={200}
                    justifyContent={'center'}
                    alignItems={'center'}
                    padding={16}
                    // boxShadow={{
                    //     xs: '0px 1px 3px rgba(0, 0, 0, 0.15)',
                    //     md: '0px 1px 5px red',
                    // }}
                >
                    <DsText
                        color="#000"
                        fontSize={{
                            xs: 16,
                            md: 24,
                        }}
                        textAlign={'center'}
                    >
                        Shadow-box com escrita/sintaxe css e convertida para
                        sintaxe aceita pelo React Native
                    </DsText>
                </DsShadowBox>
                <DsBox
                    borderRadius={10}
                    padding={{ sm: 24, md: 24, lg: 32 }}
                    backgroundColor="red"
                    width={'100%'}
                    height={200}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <DsText
                        color="#000"
                        fontSize={{
                            xs: 24,
                            md: 32,
                        }}
                    >
                        Box sem shadow-box
                    </DsText>
                </DsBox>
            </DsFlex>

            <DsLink href="/" fontSize={32}>
                Voltar
            </DsLink>
        </DsBox>
    );
}
