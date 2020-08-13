// 3-rd parties
// eslint-disable-next-line
import React,{Component} from 'react'
import logo from '../logo.svg'
// local
import '../index.css'
export default class App extends React.Component{
    render(){
        return(
            <div>
                <img className='logo' src={logo} alt="logo"/>
                <p className='title'> This is an React Component</p>
            </div>
        )
    }
}


// export default App;