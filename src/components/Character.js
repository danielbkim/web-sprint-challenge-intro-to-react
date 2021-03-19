// Write your Character component here
import React from 'react';

export default function Character({ character }) {
    console.log('Character synced.');
    // console.log(props);
    // console.log(character);
    return (
        <div>
            <h3>{ character.name }</h3>
        </div>
    );
};