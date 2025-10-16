import React from 'react';

interface IconProps {
    size?: number;
    color?: string;
    className?: string;
    onClick?: () => void;
}

export const ArrowMenuIcon: React.FC<IconProps> = ({ 
    size = 16, 
    color = "currentColor",
    className,
    onClick 
}) => {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 16 16" 
            fill="none" 
            className={className}
            onClick={onClick}
        >
            <path 
                d="M15 5L8 12L1 5" 
                stroke={color} 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    );
};