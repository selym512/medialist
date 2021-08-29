import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from 'react-bootstrap/esm/Button';
import ToggleButton from 'react-bootstrap/esm/ToggleButton';
import React from 'react';


export default class MediaList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        randomNum : null
       }
    }
    watched(y) {
     this.props.watched(y);
     
    }

    render() { 
      //style
      var classes = (theme) => ({
        root: {
          width: '100%',
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
        },
      });

      var array = [];
      var picked = []
      var increment = 0;
      //populates list of accordians consisting of watchlist
      this.props.list.forEach((x,y) => {
        picked.push(false);
        array.push(
          <Accordion key={increment} style={this.state.randomNum === increment ? {"backgroundColor":"red"} : {"backgroundColor":"default"}} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>{x.title}</Typography>
            </AccordionSummary>
            <div className="listDetails">
              <AccordionDetails>
                  <Typography> 
                    {x.description}
                  </Typography>
                </AccordionDetails>
                <div className="watchlistButtons">
                <Button onClick={() =>{this.watched(y)}}>Watched</Button>
                <Button variant="danger">X</Button>
                  
                </div>
              </div>
          </Accordion>
        )
        increment++;
      });

    return (
      array
    )
  }
}




    

