import React from 'react';
import CardList from './CardList';
//import {robots} from './robots';
import SearchBox from './Searchbox';
import './App.css';
import Scroll from './Scroll';


class  App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots:[],
            SearchField:''
        }
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}))
        
    }

onSearchChange =(event) =>{
    this.setState({SearchField:event.target.value});
}    

   render(){ 
    const FilterRobot = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
    })   
    return(
        <div className='tc'>
            <h1 className='f1'> Robo friend</h1>
            <SearchBox searchChange ={this.onSearchChange}/>
            <Scroll>
            <CardList robots = {FilterRobot}/>    
            </Scroll>
        </div>
    );
   }
}

export default App;
