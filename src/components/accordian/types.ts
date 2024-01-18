import { DsBoxType } from 'native-flow/dist/cjs/components/box/type';
import { DsTextTypes } from 'native-flow/dist/cjs/components/text/types';
import { ReactNode } from 'react';

export type DsAccordionTypes = {
    title: string;
    titleStyle?: DsTextTypes;
    content: string;
    contentStyle?: DsTextTypes;
    children?: ReactNode;
} & Partial<Omit<DsBoxType, 'children'>>;
