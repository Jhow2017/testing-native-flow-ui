import { DsBoxType } from 'native-flow/dist/cjs/components/box/type';
import { ReactNode } from 'react';

export type DsAccordionTypes = {
    title: string;
    content: string;
    children?: ReactNode;
} & Partial<Omit<DsBoxType, 'children'>>;
