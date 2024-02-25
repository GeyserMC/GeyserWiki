import React from 'react';

interface GridProps {
    children: React.ReactNode;
    elementsPerRow: number;
    gap?: string;
}

export const Grid: React.FC<GridProps> = ({ children, elementsPerRow, gap }) => {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${elementsPerRow}, 1fr)`,
        gap: gap || '0px'
    };

    return <div className="grid" style={gridStyle}>{children}</div>;
};

interface GridItemProps {
    children: React.ReactNode;
}

export const GridItem: React.FC<GridItemProps> = ({ children }) => {
    return <div className="grid-item">{children}</div>;
};