import { ReactNode } from 'react';
import { MotiProps } from 'moti';
export type DynamicModalProps = {
    children: ReactNode;
    visible: boolean;
    onClose: () => void;
    animation?: 'top' | 'right' | 'bottom' | 'left' | 'fade';
} & MotiProps;
