import { ReactNode } from 'react';
import { MotiProps } from 'moti';
import { DsBoxType } from '@ds/components/layout/box';

export type AnimationType = 'top' | 'right' | 'bottom' | 'left' | 'fade';
export type TransitionTypes = 'timing' | 'spring';

export type DsModalTypes = {
    children: ReactNode;
    visible: boolean;
    onClose: () => void;
    animation?: AnimationType;
    transition?: {
        type: TransitionTypes;
        duration: number;
    };
} & DsBoxType &
    MotiProps;
