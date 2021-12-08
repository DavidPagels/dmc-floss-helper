import React from 'react';
import Grid from '@mui/material/Grid';
import Photo from './Photo'

const Main = (props) => {

  return (
    <div>
      <main>
        <Grid container>
          <Grid item md={6}>
            <Photo />
          </Grid>
          <Grid item md={6}>
            <Photo />
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Main;