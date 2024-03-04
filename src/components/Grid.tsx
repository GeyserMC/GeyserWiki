import React from 'react';

interface GridProps {
    children: React.ReactNode;
    elementsPerRow: number;
    minElementsPerRow?: number;
    breakAt?: string;
    gap?: string;
}

export const Grid: React.FC<GridProps> = ({ children, elementsPerRow, minElementsPerRow, breakAt, gap }) => {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${elementsPerRow}, 1fr)`,
        gap: gap || '0px'
    };

    const mediaQuery = `
        @media (max-width: ${breakAt || '900px'}) {
            .grid {
                grid-template-columns: repeat(${minElementsPerRow || 1}, 1fr) !important;
            }
        }
    `;

    return (
        <>
            <style>{mediaQuery}</style>
            <div className="grid" style={gridStyle}>{children}</div>
        </>
    );
};

interface GridItemProps {
    children: React.ReactNode;
}

export const GridItem: React.FC<GridItemProps> = ({ children }) => {
    return <div className="grid-item">{children}</div>;
};