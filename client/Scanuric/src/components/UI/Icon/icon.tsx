import React from "react";
import { CloseIcon } from "./CloseIcon.tsx";
import { ArrowMenuIcon } from "./ArrowMenuIcon";
import { DotMenuIcon } from "./DotMenuIcon";

export type IconType = "close" | "arrowMenu" | "dotMenu";

export interface IconProps {
    name: IconType;
    size?: number;
    color?: string;
    className?: string;
    onClick?: () => void;
}

const iconComponents = {
    close: CloseIcon,
    arrowMenu: ArrowMenuIcon,
    dotMenu: DotMenuIcon,
};

export const Icon: React.FC<IconProps> = React.memo(({
    name,
    size = 16,
    color,
    className,
    onClick
}) => {
    const IconComponent = iconComponents[name];

    if (!IconComponent) {
        return <div style={{ width: size, height: size }} />;
    }

    return (
        <IconComponent
            size={size}
            color={color}
            className={className}
            onClick={onClick}
        />
    );
});