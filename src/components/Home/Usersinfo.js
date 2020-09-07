import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
const Usersinfo = (props) => {
  const { id, title, body } = props.usr;
  return (
    <div>
      <Container maxWidth='md'>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Card>
              <CardHeader></CardHeader>
              <Typography gutterBottom variant='h5' component='h2'>
                {title}
              </Typography>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {body}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>
                  <Link to={'/' + id}>More Info</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader>
                <Avatar alt='' src='https://source.unsplash.com/random' />
              </CardHeader>
              <Typography gutterBottom variant='h5' component='h2'>
                {title}
              </Typography>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {body}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>
                  <Link to={'/' + id}>More Info</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader></CardHeader>
              <Typography gutterBottom variant='h5' component='h2'>
                {title}
              </Typography>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {body}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>
                  <Link to={'/' + id}>More Info</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <br></br>
    </div>
  );
};

export default Usersinfo;
