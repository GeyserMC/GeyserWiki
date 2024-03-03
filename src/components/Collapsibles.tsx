import React, { useEffect, useRef, useState } from 'react';

export const Collapsibles = ({ children }) => {
    return (
        <div className="collapsible">
            {children}
        </div>
    );
};

interface CollapsibleProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    inner: React.ReactNode;
}

export const Collapsible: React.FC<CollapsibleProps> = ({ title, subtitle, inner }) => {
    const [isInnerVisible, setIsInnerVisible] = useState(false);
    const innerRef = useRef(null);
    const [innerHeight, setInnerHeight] = useState(0);

    useEffect(() => {
        if (innerRef.current) {
            setInnerHeight(isInnerVisible ? innerRef.current.scrollHeight : 0);
        }
    }, [isInnerVisible]);

    const toggleVisibility = () => {
        setIsInnerVisible(!isInnerVisible);
    };

    return (
        <div className="collapsible">
            <div className="collapsible-header" onClick={toggleVisibility}>
                <p>
                    <span className="collapsible-title">{title}</span>
                    {subtitle && <span className="collapsible-subtitle"><br/>{subtitle}</span>}
                </p>
                <span className={isInnerVisible ? 'collapsible-arrow expanded' : 'collapsible-arrow'}></span>
            </div>
            <div className="collapsible-line"></div>
            <div className="inner" ref={innerRef} style={{ height: `${innerHeight}px` }}>
                <div className="inner-content">
                    {inner}
                </div>
            </div>
        </div>
    );
};