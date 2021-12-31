import React from 'react';

function Canvas(hexColor, rgb) {
    return(
        <div className="canvas" style={{ backgroundColor: hexColor }}>
            { hexColor && <h1 className='hero-hex-text'>{ hexColor }</h1> }
            { <h1 className='her-rgb-text'>{ `RED: ${rgb[0]}, GREEN: ${rgb[1]}, BLUE: ${rgb[2]}` }</h1> }
        </div>
    )
}

export default Canvas;
