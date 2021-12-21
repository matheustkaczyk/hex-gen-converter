import React from 'react';

function Canvas(hexColor) {
    return(
        <div className="canvas" style={{ backgroundColor: hexColor }}>
            { hexColor && <h1 className='hero-hex-text'>{ hexColor }</h1> }
        </div>
    )
}

export default Canvas;
