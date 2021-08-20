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
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {    
        this.setState({value: event.target.value}); 
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
                console.error(error);
            });
            
    }


    render(){
        if (this.state.rando === false && this.state.results !== ''){
            var leftpanel = <MediaCard result={this.state.results}></MediaCard>
        }
        else{
            var leftpanel = <Button  style={{"width":"90%", "height":"40%"}} size="lg" variant="dark" type="submit">RANDOMIZER</Button>
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
                        <MediaList></MediaList>
                    </td>
            </tr>
        </tbody>
        </table>
        </>
        )
    }
};

export default Dashboard;