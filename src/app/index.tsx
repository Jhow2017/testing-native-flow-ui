import { DsText } from '../designer-system/components/typography';
import { DsBox } from '../designer-system/layout';

export default function TabOneScreen() {
    return (
        <DsBox
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor={'red'}
        >
            <DsText>Olá!!</DsText>
        </DsBox>
    );
}
