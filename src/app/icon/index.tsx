import { Icon, Link } from 'native-flow';
import { Box, Flex } from 'native-flow';

export default function IconPage() {
    return (
        <Box
            flex={1}
            justifyContent={'center'}
            alignItems={'center'}
            // backgroundColor={{
            //     xs: 'red',
            //     sm: 'yellow',
            // }}
            backgroundColor={{
                ':w[200,500]': 'blue',
                ':w[500,900]': 'yellow',
            }}
        >
            <Flex
                gap={{
                    ':w[200,500]': 24,
                    ':w[500,900]': 75,
                }}
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={{
                    xs: 'column',
                    md: 'row',
                }}
                backgroundColor={'green'}
                padding={24}
            >
                <Icon
                    icon="close"
                    color="red"
                    size="xxlarge"
                    onPress={() => console.log('Clicou no xxlarge')}
                    justifyContent={'center'}
                    alignItems={'center'}
                    stylesText={{
                        fontSize: 12,
                    }}
                >
                    xxlarge
                </Icon>
                <Icon
                    icon="close"
                    color="red"
                    size="xlarge"
                    onPress={() => console.log('Clicou no xlarge')}
                    justifyContent={'center'}
                    alignItems={'center'}
                    stylesText={{
                        fontSize: 12,
                    }}
                >
                    xlarge
                </Icon>
                <Icon
                    icon="close"
                    color="red"
                    size="large"
                    onPress={() => console.log('Clicou no large')}
                    justifyContent={'center'}
                    alignItems={'center'}
                    stylesText={{
                        fontSize: 12,
                    }}
                >
                    large
                </Icon>
                <Icon
                    icon="close"
                    color="red"
                    size="medium"
                    onPress={() => console.log('Clicou no medium')}
                    justifyContent={'center'}
                    alignItems={'center'}
                    stylesText={{
                        fontSize: 12,
                    }}
                >
                    medium
                </Icon>
                <Icon
                    icon="close"
                    color="red"
                    size="small"
                    onPress={() => console.log('Clicou no small')}
                    justifyContent={'center'}
                    alignItems={'center'}
                    stylesText={{
                        fontSize: 12,
                    }}
                >
                    small
                </Icon>
                <Icon
                    icon="close"
                    color="red"
                    size="xsmall"
                    onPress={() => console.log('Clicou no xsmall')}
                    justifyContent={'center'}
                    alignItems={'center'}
                    stylesText={{
                        fontSize: 12,
                    }}
                >
                    xsmall
                </Icon>
            </Flex>

            <Link href="/" fontSize={32} marginTop={32}>
                voltar
            </Link>
        </Box>
    );
}
