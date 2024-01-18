import { DsBoxType } from 'native-flow/dist/cjs/components/box/type';
import { ReactNode } from 'react';

export interface DsCarouselTypes extends DsBoxType {
    children: ReactNode[];
    showArrows: boolean;
    showDots: boolean;
    autoPlay?: boolean;
    interval?: number;
}
