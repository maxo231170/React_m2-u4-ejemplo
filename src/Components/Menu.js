import React, { Component } from "react";
import {Link} from "react-router-dom";
class Menu extends Component {
    
    componentWillMount(){
        console.log("componentWillMount")
    }
    componentDidMount(){
        console.log("componentDidMount Menu")
    }
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps",nextProps)
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate",nextProps,nextState);
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate",nextProps,nextState);
    }
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate",prevProps,prevState);
    }
    render() {
            return (
                <div>
                    <Link to={'/'}>Inicio</Link>
                    <Link to={'/registro'}>Registro</Link>
                    <Link to={'/login'}>Login</Link>
                    
                </div>
            )
    }
}

export default Menu;