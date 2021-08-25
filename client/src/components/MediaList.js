import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from 'react-bootstrap/esm/Button';
import ToggleButton from 'react-bootstrap/esm/ToggleButton';
import uuid from 'react-uuid'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function MediaList(props) {

  const arrayStuff = [];
  

  const classes = useStyles();


 

  props.list.forEach((x) => {
    arrayStuff.push(
        
        <Accordion key={uuid()} style={x.picker === true ? {"backgroundColor":"red"} : {"backgroundColor":"default"}} >
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

  // useEffect(() => {
  //   axios.get('http://localhost:5001/api/movies/watchlist', {mode: 'cors','withCredentials':true})
  //   .then(response => {console.log(response.data);})
  //     .catch(error => {console.log(error)});
  // },[]);

  return (

    arrayStuff

    
  )}




  

