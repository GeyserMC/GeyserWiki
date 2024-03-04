import React from 'react';

const PlatformIcon = ({ img = null, svg: SvgComponent = null, text="", width = '20px', height = '20px' }) => {
    return (
        img != null ?
            <>
                <img src={img} style={{ width, height, position: 'relative', top: '3px', right: '3px' }}/>
                {text}&nbsp;
            </> :
        SvgComponent != null ?
            <>
                <SvgComponent style={{ width, height, position: 'relative', top: '3px', right: '3px' }}/>
                {text}&nbsp;
            </> : null
    );
};

export default PlatformIcon;