import React, { useEffect, useRef, useState } from 'react';

export const Questions = ({ children }) => {
    return (
        <div className="questions">
            {children}
        </div>
    );
};

export const Q = ({ children }) => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    const answerRef = useRef(null);
    const [answerHeight, setAnswerHeight] = useState(0);

    useEffect(() => {
        if (answerRef.current) {
            setAnswerHeight(isAnswerVisible ? answerRef.current.scrollHeight : 0);
        }
    }, [isAnswerVisible]);

    const questionText = children[0];
    const answerComponent = React.Children.toArray(children)[1];

    const arrowClass = isAnswerVisible ? 'question-arrow expanded' : 'question-arrow';

    return (
        <div className="question" onClick={() => setIsAnswerVisible(!isAnswerVisible)}>
            <div className="question-header">
                <span className="question-text">{questionText}</span>
                <span className={arrowClass}></span>
            </div>
            <div className="question-line"></div>
            <div className="answer" ref={answerRef} style={{ height: `${answerHeight}px` }}>
                {answerComponent}
            </div>
        </div>
    );
};

export const A = ({ children }) => {
    return (
        <div className="answer">
            {children}
        </div>
    );
};