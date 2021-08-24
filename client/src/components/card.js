import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // width: 800,
    maxWidth: 400,
    margin: 'auto',
    marginBottom: 40
  },
  media: {
    // maxHeight: 400,
    height: 0,
    // width:'100%',
    paddingTop: '100%'
    
    
  },
});
// const styles = theme => ({
//     root: {
//         width: "300",
//         margin: 'auto'
//     },
//     media: {
//         height: "100%",
//         width: '100%',
//     }
//   });
  

export default function MediaCard(props) {

  const classes = useStyles();
//   const imgs = styles();


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.result.resp1.results[0].image.url ?? ''}
          title={props.result.resp1.results[0].title ?? ''}
          height="1500"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.result.resp1.results[0].title ?? ''}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Rating: {props.result.resp2.ratings.rating ?? ''}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.result.resp2.plotSummary.text ?? ''}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={props.addToList} size="small" color="primary">
          Add to list
        </Button>
        <Button onClick={props.close} size="small" color="secondary">
          close
        </Button>
      </CardActions>
    </Card>
  );
}
