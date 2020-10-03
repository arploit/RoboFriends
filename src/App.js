import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './Searchbox';


class  App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots:robots,
            SearchField:''
        }
    }

onSearchChange =(event) =>{
    this.setState({SearchField:event.target.value});
    console.log(event.target.value);
}    

   render(){ 
    const FilterRobot = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
    })   
    return(
        <div className='tc'>
            <h1> Robo friend</h1>
            <SearchBox searchChange ={this.onSearchChange}/>
            <CardList robots = {FilterRobot}/>    
        </div>
    );
   }
}

export default App;
