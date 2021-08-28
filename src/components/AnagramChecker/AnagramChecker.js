import React, { useState } from 'react';
import { TextField, Button, Container, Grid } from '@material-ui/core';

function AnagramChecker() {
  const [firstWord, setFirstWord] = useState('');
  const [secondWord, setSecondWord] = useState('');

  const createCharacterMap = (string) => {
    const characterMap = {};

    for (let character of string.replace(/[^\w]/g, '').toLowerCase()) {
      if (!characterMap[character]) {
        characterMap[character] = 1;
      } else {
        characterMap[character]++;
      }
    }

    return characterMap;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const firstCharacterMap = createCharacterMap(firstWord);
    const secondCharacterMap = createCharacterMap(secondWord);

    if (
      Object.keys(firstCharacterMap).length !==
      Object.keys(secondCharacterMap).length
    ) {
      alert('false');

      return false;
    }

    for (let character in firstCharacterMap) {
      if (firstCharacterMap[character] !== secondCharacterMap[character]) {
        alert('false');

        return false;
      }
    }
    alert('true');

    return true;
  };

  const isFormValid = () => {
    return firstWord && secondWord;
  };

  return (
    <Container component="main" maxWidth="sm" marginTop>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={3}
          direction="column"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="firstWord"
              label="First Word"
              name="firstWord"
              value={firstWord}
              onChange={(event) => setFirstWord(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="secondWord"
              label="Second Word"
              name="secondWord"
              value={secondWord}
              onChange={(event) => setSecondWord(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!isFormValid()}
            >
              Check
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default AnagramChecker;
