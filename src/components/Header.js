import React, { useContext } from 'react';
import MyContext from '../context/Context';
import randomHex from 'random-hex';
import randomIcon from '../images/randomIcon.png';
import { toRGB } from 'hex-rgb-converter';

const Header = () => {
    const { setHexColor, setRgb } = useContext(MyContext);

    const handleClick = () => {
      let Hex = randomHex.generate();
      setHexColor(Hex);
      setRgb(toRGB(Hex.split('').slice(1, 7).join('')));
    }
  
    return(
        <div className='header'>
          <button className='header-btn' onClick={() => handleClick()}>
            <img className='header-icon' src={ randomIcon } alt='header-icon' />
          </button>
        </div>
    )
}

export default Header;
