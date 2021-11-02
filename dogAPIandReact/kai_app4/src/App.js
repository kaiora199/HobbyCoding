import './App.css';
import axios from 'axios';
import React from 'react';
import DogPound from './components/dogPound.js'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dogs: []
    }
  }

  componentDidMount(){
    console.log('mounted')
    axios.get('http://localhost:3000/dogBox')
    .then((response)=>{
      console.log(response);
      this.setState({dogs: response.data.dogs});
      console.log(response.data.dogs);
    })
    .catch((err)=> console.log(err))
  }

  render()
  {
    return (
      <div>
        <DogPound dogData={this.state.dogs}/>
      </div>
      
    )
  }
}

export default App;
