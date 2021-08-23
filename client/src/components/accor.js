// import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from 'react-bootstrap/esm/Button';
import ToggleButton from 'react-bootstrap/esm/ToggleButton';
import { useEffect } from 'react';
import axios from 'axios';




const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {

  


  // const {list, setList} = useState([{
  //   "title": "Ingloriious Bastards",
  //   "watched": true,
  //   "picker" : false,
  //   "description": "A movie summary will go in here. Once I get that figured out. Also you can 'check' whether a movie is watched and delete from list."
  // },
  // {
  //   "title": "Avengers",
  //   "watched": true,
  //   "picker": false,
  //   "description": "Ya this movie is pretty bad but it's whatever"
  // }]);

  const classes = useStyles();


  const arrayStuff = [];

  const list = [{
      "title": "Ingloriious Bastards",
      "watched": true,
      "picker" : false,
      "description": "A movie summary will go in here. Once I get that figured out. Also you can 'check' whether a movie is watched and delete from list."
    },
    {
      "title": "Avengers",
      "watched": true,
      "picker": true,
      "description": "Ya this movie is pretty bad but it's whatever"
    },{
      "title": "Kobo the movie",
      "watched": true,
      "picker" : false,
      "description": "Kobo does stuff and then the movie ends 10 outta 10"
    }]

  list.forEach((x) => {
    arrayStuff.push(
        
        <Accordion style={x.picker === true ? {"backgroundColor":"red"} : {"backgroundColor":"default"}} key={x.title}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{x.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {x.description}
            </Typography>
            <ToggleButton type="checkbox">Watched</ToggleButton>
            <Button variant="danger">X</Button>
          </AccordionDetails>
    </Accordion>
    )
  });

  useEffect(() => {
    axios.get('http://localhost:5001/api/movies/watchlist', {mode: 'cors','withCredentials':true}).then(response => {
      console.log(response.data);
    });
  },[]);

  return (

    

    arrayStuff

    
    // (x => {

    //   <Accordion key={x.title} style={{"backgroundColor":"red"}}>
    //   <AccordionSummary
    //     expandIcon={<ExpandMoreIcon />}
    //     aria-controls="panel2a-content"
    //     id="panel2a-header"
    //   >
    //     <Typography className={classes.heading}>Inglorious Bastards</Typography>
    //   </AccordionSummary>
    //   <AccordionDetails>
    //     <Typography>
    //       A movie summary will go in here. Once I get that figured out. Also you can "check" whether a movie is watched and delete from list. 
    //     </Typography>
    //     <ToggleButton  type="checkbox">Watched</ToggleButton>
    //     <Button variant="danger">X</Button>
    //   </AccordionDetails>
    // </Accordion>
  )}







    // <div className={classes.root}>
     
    //   <Accordion style={{"backgroundColor":"red"}}>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel2a-content"
    //       id="panel2a-header"
    //     >
    //       <Typography className={classes.heading}>Inglorious Bastards</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         A movie summary will go in here. Once I get that figured out. Also
    //          you can "check" whether a movie is watched and delete from list. 
    //       </Typography>
    //       <ToggleButton  type="checkbox">Watched</ToggleButton>
    //       <Button variant="danger">X</Button>
    //     </AccordionDetails>
    //   </Accordion>
    // </div>
  

