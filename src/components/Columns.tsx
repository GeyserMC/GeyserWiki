import React from 'react';

export const Columns = ({ children }) => {
    return <div className="columns">{children}</div>;
};

interface ColumnProps {
    width?: number;
    children: React.ReactNode;
}

export const Column: React.FC<ColumnProps> = ({ children, width = 1 }) => {
    const style = {
        flex: `${width} 1 0%`,
    };

    return <div className="column" style={style}>{children}</div>;
};