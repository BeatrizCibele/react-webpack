import React from 'react';
import colorStyle from './colorStyle';

const Button = ({children, handleClick, colorStyle}) => (
<button className='main-button'
 onClick={handleClick}>
    {children}
</button>
);

Button.propTypes={
    handleClick: React.PropTypes.func
}   
export default Button;