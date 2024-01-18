import { DsLink, DsBox, DsFlex, DsText, DsCarousel } from 'native-flow';
import DsAccordian from '@components/accordian';

export default function AccordionPage() {
    const menuData = [
        {
            title: 'Sizzler',
            content: 'Descrição do Sizzler',
        },
        {
            title: 'Pizza',
            content: 'Descrição da Pizza',
        },
        {
            title: 'Garlic Bread',
            content: 'Descrição do Garlic Bread',
        },
    ];

    return (
        <DsBox flex={1} backgroundColor={'red'} width={'100%'}>
            {menuData.map((item, index) => (
                <DsAccordian
                    key={index}
                    title={item.title}
                    content={item.content}
                />
            ))}

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
