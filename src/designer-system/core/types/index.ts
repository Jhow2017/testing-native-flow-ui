import { BaseFlexTypes } from './flex';
import { BaseImageStyles } from './image';
import { BaseTextTypesProps } from './text';
import { BaseViewTypesProps } from './view';

export type BaseStylesProps = BaseViewTypesProps &
    BaseTextTypesProps &
    BaseImageStyles &
    BaseFlexTypes;
