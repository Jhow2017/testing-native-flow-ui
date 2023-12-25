import { IconProps } from '../../types';

export function CloseIcon({ size, color }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path
                d="M6 6L18 18"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M6 18L18 6"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}
