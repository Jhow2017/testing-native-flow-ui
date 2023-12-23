import { ReactNode } from 'react';

// types
import { BaseViewTypesProps } from '../types/view';

export interface ComponentMounterType extends BaseViewTypesProps {
    children: ReactNode;
}
