import React, { useState } from 'react';
import MyContext from './Context';

const Provider = (props) => {
    const [hexColor, setHexColor] = useState('#ffffff');
    const [rgb, setRgb] = useState([255, 255, 255]);

    const contextValue = { hexColor, setHexColor, rgb, setRgb }

    return(
        <MyContext.Provider value={ contextValue }>
            { props.children }
        </MyContext.Provider>
    )
}

export default Provider;
