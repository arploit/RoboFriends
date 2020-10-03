import React from 'react';
import 'tachyons';

const SearchBox = ({ searchfield,searchChange }) => {
    return(
        <div className='br-pill pa2'>
            <input 
            type='Search'
            placeholder = 'RoboFriend'
            className='br-pill pa3 ba b--green bg-lightest-blue'
            onChange={searchChange}    
            />
        </div>
    )

}

export default SearchBox;