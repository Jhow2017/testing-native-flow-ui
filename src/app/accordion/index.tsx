import { DsLink, DsBox, DsAccordian } from 'native-flow';

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
        <DsBox flex={1}>
            {menuData.map((item, index) => (
                <DsAccordian
                    key={index}
                    title={item.title}
                    content={item.content}
                />
            ))}

            <DsBox
                flex={1}
                backgroundColor={{
                    xs: 'blue',
                    md: 'green',
                }}
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
