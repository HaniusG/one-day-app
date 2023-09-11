import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login';
import Avatar from './components/Avatar';
import './index.css';


class App extends Component {
  render(){
    
    return(
      <div className='register-form'>
         <Avatar/>
         <Login/>
      </div>
   
    )
  }

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)


