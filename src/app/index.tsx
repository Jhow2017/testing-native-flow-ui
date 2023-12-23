import { DsText } from '@ds/components/typography';
import { DsFlex } from '@ds/layout';
import { Text } from 'react-native';

export default function TabOneScreen() {
    return (
        <DsFlex
            flex={1}
            justifyContent={{ sm: 'center' }}
            alignItems={{ sm: 'center', md: 'center' }}
            backgroundColor={{ sm: 'red', md: 'blue' }}
            gap={{ sm: 24, md: 24 }}
        >
            <DsText color="green" fontSize={24}>
                Olá!!
            </DsText>
            <DsText>Olá!!</DsText>
        </DsFlex>
    );
}
