import React from 'react';
import {Link} from "react-router-dom";
import {Card, CardContent, CardMedia, Grid, makeStyles, Typography} from "@material-ui/core";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyle = makeStyles({
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px'
  },
  cardMedia: {
    width: '150px',
    height: '150px',
    marginRight: '20px'
  },
  marginBottom10: {
    marginBottom: '10px'
  },
  icon: {
    fontSize: '15px',
    verticalAlign: 'middle',
    marginRight: '5px'
  }
});

const PostItem = (props) => {
  const classes = useStyle();

  return (
    <Grid item className={classes.marginBottom10}>
      <Card className={classes.card}>
        <CardMedia
          image={props.image}
          title={props.title}
          className={classes.cardMedia}
        />
        <CardContent>
          <Typography variant="body1" className={classes.marginBottom10}>
            {props.datetime} <strong>by {props.author}</strong>
          </Typography>
          <Typography variant="body1" className={classes.marginBottom10}>
            <Link to={props.url}>{props.title}</Link>
          </Typography>
          <Typography>
            <ChatBubbleOutlineIcon className={classes.icon}/>
            10
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PostItem;