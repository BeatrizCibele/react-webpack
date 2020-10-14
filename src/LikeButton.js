import React from 'react';
import Button from './Button';

const LikeButton = (props) => (
<Button handleClick={() => alert("like clicked")}>{props.name}</Button>
);

export default LikeButton;