import React from 'react';
import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Container } from '@material-ui/core';

const Comment = (props) => {
  const { name, email } = props.comments;
  const [photo, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?_limit=1`)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <div>
      <h1>comments</h1>
      <Container>
        <Grid container spacing={4}>
          <Grid spacing={2}>
            <div>
              {photo.map((imgs) => (
                <Avatar alt='' src={imgs.thumbnailUrl} />
              ))}
            </div>
          </Grid>

          <Grid item xs={4}>
            <Typography gutterBottom variant='h5' component='h2'>
              {name}
            </Typography>

            <Typography variant='body2' color='textSecondary' component='p'>
              {email}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Comment;
