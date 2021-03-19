// Write your Character component here
import React from 'react';

export default function Character({ character, people }) {
    const peopleObj = {};
    // STRETCH GOAL: match peopleObj to id and spit out the image
    // console.log('Character synced.');
    // console.log(props);
    console.log(character);
    // console.log(character.key, character.url)
    peopleObj[people] = character.name;
    // console.log(peopleObj);
    return (
        // { for(let i in characterUrls) {
        //     characterUrls[character.url];
        //     console.log(characterUrls);
        // }; }
        <div>
            {/* <img src={ character.url } alt='character-picture'></img> */}
            <h3>{ character.name }</h3>
            {/* <p>Species: { character.species }</p> */}
            {/* <p>Homeworld: { character.homeworld }</p> */}
            <p>Height { character.height } cm</p>
            <p>Mass: { character.mass } kg</p>
            <p>YOB: { character.birth_year }</p>
            <p>Eye Color: { character.eye_color }</p>
            <p>Hair Color: { character.hair_color }</p>
            <p>Skin Color: { character.skin_color }</p>
            <ul>
                {/* { character.films.map((film) => {
                    return <li><a href='#'>{ film }</a></li>
                })} */}
            </ul>
        </div>
    );
};