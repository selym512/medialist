import MediaList from "./MediaList";
import Button from "react-bootstrap/esm/Button";
import React from "react";
import axios from "axios";
import MediaCard from "./card";




class Dashboard extends React.Component{

    constructor(){
        super()
        this.state = {
           value: '',
           rando: true,
           results: '',
           error: null,
           list: [],
           randomize: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openRando = this.openRando.bind(this);
        this.addToList = this.addToList.bind(this);
        this.randomizer = this.randomizer.bind(this);
    }
    componentDidMount(){
            axios.get('http://localhost:5001/api/movies/watchlist',{ mode: 'cors', 'withCredentials':true })
            .then(response => {
              this.setState(state => ({
                ...state,
                list: [...state.list, ...response.data.watchList]
              })
            )
            console.log(response.data.watchList);
          }
          )
    }
    handleChange(event) {    
        this.setState({value: event.target.value}); 
    }
    openRando = () => {
        this.setState((state) => {
            return{...state, rando: !state.rando}
        });
    }
    randomizer = () => {
        var listLength = this.state.list.length;
        for(var i =0; i<6; i++){
            var rand =  0 + (Math.random() * (listLength-1));
            this.setState((state) => ({
                ...state
                //need to randomize 
            }));
            setTimeout(() => {  console.log("World!"); }, 1000);
        }
        

    }
    addToList = () => {
        this.setState(state => ({
            ...state,
            list: [...state.list, {
                "title": state.results.resp1.results[0].title,
                "watched": true,
                "picker" : false,
                "description": state.results.resp2.plotSummary.text,
                "rating": state.results.resp2.ratings.rating,
                "image": state.results.resp1.results[0].image.url

                }]
        })
        );
        this.openRando();
        axios.put('http://localhost:5001/api/movies/watchlist', 
        {
            "title": this.state.results.resp1.results[0].title,
            "watched": true,
            "picker" : false,
            "description": this.state.results.resp2.plotSummary.text,
            "rating": this.state.results.resp2.ratings.rating,
            "image": this.state.results.resp1.results[0].image.url
            }, 
        {
            mode: 'cors',
            'withCredentials':true
        })
        .then(response => {console.log(response.data);})
          .catch(error => {console.log(error)});
    }
    handleSubmit(event) {

        event.preventDefault();
        var options = {
            method: 'GET',
            url: 'http://localhost:5001/api/movies',
            params: {q: this.state.value},
            }
            // method: 'GET',
            // url: 'https://random-data-api.com/api/hipster/random_hipster_stuff'}
            
            axios.request(options).then((response) => {
                console.log(response.data);
                this.setState({results: response.data});
                this.setState({rando: false});
               
            }).catch(function (error) {
                this.setState({error});
                console.error(error);
            });
            
    }


    render(){
        const { error, rando, results, list } = this.state;
        var leftpanel;
        if(error){
            <p>{error.message}</p>
        }
        else if (rando === false && results !== ''){
            leftpanel = <MediaCard addToList={this.addToList} close={this.openRando} result={results}></MediaCard>
            // leftpanel = <p>{results.resp1.results[0].image.url}</p>
        }
        else{
            leftpanel = <Button onClick={this.randomizer} style={{"width":"90%", "height":"40%"}} size="lg" variant="dark" type="submit">RANDOMIZER</Button>
        }


        return(
        <>
        <table height="100%">
        <tbody height="100%">
            <tr height="100%">
                <td valign="bottom" align="center" height="500"  rowSpan="20" width="40%">
                {leftpanel}
                </td>
                <td valign="top" height="100%" width="60%">
                    <div className = "top">
                        <Button onClick={this.handleSubmit} size="sm" variant="dark" type="submit">
                            Search
                        </Button>
                        
                        <input style={{"width":"100%"}} type="text" onChange={this.handleChange} id="exampleFormControlInput1" placeholder="Search a movie title" />
                    </div>
                        <MediaList list={list}></MediaList>
                    </td>
            </tr>
        </tbody>
        </table>
        </>
        )
    }
};

export default Dashboard;