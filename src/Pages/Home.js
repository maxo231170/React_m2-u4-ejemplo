import React, { Component } from "react";
import ProductoDetalle from "../Components/ProductoDetalle";

class Home extends Component{
    constructor(){
        super()
        this.state={
            productos:[],
            loading:true
        }
    }
    componentWillMount(){
        console.log("componentDidMount")
       
        fetch("https://jsonfy.com/items")
        .then(res=>res.json())
        .then(result=>{
            console.log("result",result);
            if(result.length>0){
                this.setState({
                    productos:result,
                    loading:false
                })
            }
        },
        (err)=>{
            console.log("error",err)
        })
    }
    render(){
        if(this.state.loading){
            return(
                <div>
                    Loading...!
                </div>
            )
        }else{
            return (
                <div>
                    {this.state.productos.map(producto=><ProductoDetalle data={producto} buttons={true}/>)}
                </div>
            )
        } 
    }
}
export default Home;