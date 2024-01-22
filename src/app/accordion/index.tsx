import { Link, Box, Accordian } from 'native-flow';

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
        <Box flex={1}>
            {menuData.map((item, index) => (
                <Accordian
                    key={index}
                    title={item.title}
                    content={item.content}
                />
            ))}

            <Box
                flex={1}
                backgroundColor={{
                    xs: 'blue',
                    md: 'green',
                }}
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
