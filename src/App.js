import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  

  // set up state
  const [ characters, setCharacters ] = useState([]);
  const [ characterId, setCharacterId ] = useState(0);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then((res) => {
        // console.log(res.data);
        setCharacters(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);  // without the empty array, the call keeps happening

  // use styles from styled components here:
  const StyledSection = styled.div``

  const StyledTitle = styled.h1``

  const StyledSubtitle = styled.h2``
  
  const StyledCharacter = styled.div``




  // pass in people id prop

  return (
    <div className="App">
      <StyledSection>
        <div>
          <h1 className="Header">STAR WARS</h1>
          <h2>Department of Motor Vehicles</h2>
        </div>
      </StyledSection>
      <div>
        {/* <Character character=/> */}
        { characters.map((char, index) => {
          // console.log(char.url)
          const url = char.url
          const people = url.slice(url.length - 2, -1);
          // console.log(characterIdentifier);

          return <Character key={ index } character={ char } people={ people }/>
        }) }
      </div>
    </div>
  );
}

export default App;
