import React from 'react';
import Button from './Button'

const SearchButton = (props) => (
<Button handleClick={()=> alert('search clicked')}>{props.name}</Button>
)

export default SearchButton;