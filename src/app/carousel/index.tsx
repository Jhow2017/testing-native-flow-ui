import { Image } from 'react-native';
import { DsLink, DsBox, DsFlex, DsText } from 'native-flow';
import DsCarousel from '@components/carousel';
export default function CarouselPage() {
    const DATA = [
        {
            image: 'https://i0.wp.com/help.grandchef.com.br/wp-content/uploads/2019/09/ceb-JUmP.png?fit=1600%2C900&ssl=1',
        },
        {
            image: 'https://www.clickriomafra.com.br/wp-content/uploads/2021/04/06/Promo%C3%A7%C3%B5es-especiais-no-aplicativo-do-Restaurante-Vitorino-2.jpg',
        },
        {
            image: 'https://cdn.abrahao.com.br/base/c06/02e/7be/promocao-restaurante-oriental-fb.png',
        },
    ];

    return (
        <DsBox flex={1} backgroundColor={'red'} width={'100%'}>
            <DsCarousel showDots autoPlay showArrows>
                {DATA.map((item, index) => (
                    <DsFlex
                        key={index}
                        width={'100%'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        gap={12}
                    >
                        <DsText>Aqui é um titulo {index}</DsText>
                        <Image
                            key={index}
                            source={{ uri: item.image }}
                            style={{
                                width: '100%',
                                height: 250,
                                resizeMode: 'cover',
                            }}
                        />
                    </DsFlex>
                ))}
            </DsCarousel>
            <DsBox
                flex={1}
                backgroundColor={'green'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <DsLink
                    href="/"
                    fontSize={{
                        xs: 32,
                        md: 50,
                    }}
                >
                    voltar
                </DsLink>
            </DsBox>
        </DsBox>
    );
}
