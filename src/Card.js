import React from 'react';

const Card = ({name, email, id}) => {

    return(
        <div className ='tc bg-light-green dib br3 pa3 ma2 grow b2 shadow-5'>            
            <img alt='Robot' src={`https://robohash.org/${id}?set=set3&size=300x300`}/>
            <div>
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
       </div>
    );

}


export default Card;