import React from 'react';

const SearchBox = ({ searchfield,searchChange }) => {
    return(
        <div className='pa2'>
            <input 
            type='Search'
            placeholder = 'RoboFriend'
            className='pa3 ba b--green bg-lightest-blue'
            onChange={searchChange}    
            />
        </div>
    )

}

export default SearchBox;