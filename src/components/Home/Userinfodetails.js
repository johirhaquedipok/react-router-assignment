import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from './Comment';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Userinfodetails = () => {
  //post api
  let { id } = useParams();
  const [postdetail, setPostdetail] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPostdetail(data));
  }, [id]);

  // comments api
  const [comment, setComment] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?_limit=5`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);

  return (
    <div>
      <br></br>
      <br></br>
      <Container maxWidth='md'>
        <Grid container spacing={12}>
          <Grid item xs={8}>
            <Card>
              <CardHeader>{id} no person's detals</CardHeader>
              <Typography gutterBottom variant='h5' component='h2'>
                {postdetail.title}
              </Typography>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {postdetail.body}
                </Typography>
              </CardContent>
              <CardContent>
                {comment.map((comments) => (
                  <Comment comments={comments}></Comment>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Userinfodetails;
