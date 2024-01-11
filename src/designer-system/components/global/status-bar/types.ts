import { ComponentMounterType } from '@ds/core/component-mounter/types';
import { Link, LinkProps } from 'expo-router';

export type DsLinkRef = React.ElementRef<typeof Link>;
export type DsLinkType = {} & ComponentMounterType & LinkProps<''>;
