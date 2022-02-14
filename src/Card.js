import React from 'react';

export default function Card({id, name, email}){
    return(
     <div id='container'>
        <img src={`https://robohash.org/${id}`} alt='profile_img' />
        <div className='main'>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    </div>
    )    
}