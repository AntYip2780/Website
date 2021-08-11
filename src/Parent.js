import React from 'react';
import Sorting from './Sorting'
import Search from './Search'
import Scroll from './Scroll';
class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            search: '',
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(data => this.setState({robots: data}));
    }
    search = (event) => {
        this.setState({search: event.target.value});
    }
    render() {
        const filer = this.state.robots.filter(robo => 
             robo.name.includes(this.state.search)
        )
        return (
           <React.Fragment>
               <Search sear = {this.search} />
               <Scroll>
               <Sorting filtera = {filer}/>
               </Scroll>
        </React.Fragment>
        )
    }
    }

    export default Parent;