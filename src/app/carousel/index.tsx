import { Image } from 'react-native';
import { Link, Box, Flex, Text, Carousel } from 'native-flow';

export default function CarouselPage() {
    const DATA = [
        {
            image: 'https://cdn.abrahao.com.br/base/c06/02e/7be/promocao-restaurante-oriental-fb.png',
        },
        {
            image: 'https://cdn.abrahao.com.br/base/c06/02e/7be/promocao-restaurante-oriental-fb.png',
        },
        {
            image: 'https://cdn.abrahao.com.br/base/c06/02e/7be/promocao-restaurante-oriental-fb.png',
        },
    ];

    return (
        <Box flex={1} backgroundColor={'red'} width={'100%'}>
            <Carousel showDots autoPlay showArrows>
                {DATA.map((item, index) => (
                    <Flex
                        key={index}
                        width={'100%'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        gap={12}
                    >
                        <Text>Aqui é um titulo {index}</Text>
                        <Image
                            key={index}
                            source={{ uri: item.image }}
                            style={{
                                width: '100%',
                                height: 250,
                                resizeMode: 'cover',
                            }}
                        />
                    </Flex>
                ))}
            </Carousel>
            <Box
                flex={1}
                backgroundColor={'green'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Link
                    href="/"
                    fontSize={{
                        xs: 32,
                        md: 50,
                    }}
                >
                    voltar
                </Link>
            </Box>
        </Box>
    );
}
