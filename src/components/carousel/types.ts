import { DsBoxType } from 'native-flow/dist/cjs/components/box/type';
import { ReactNode } from 'react';

export type DsCarouselTypes = {
    children: ReactNode[];
    showDots?: boolean;
    time?: number;
} & DsBoxType;
