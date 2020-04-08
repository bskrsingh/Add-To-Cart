import React,{Component} from 'react';
import Cart from '../cart/Cart'
class Product extends Component{

    constructor(props){
        super(props);
        console.log("product constructor call");
        this.state = {pID : '', qty : 0, isCart : true}
    }

    addCart = (pId) => (
        this.setState((state) => ({
            pID : pId , qty : state.qty + 1
        }))
    )

    removeCart = () => (
        this.setState({isCart : false})
    )

    render(){
        return(
            <div>
                <p>Product</p>
                <button onClick={() => this.addCart(1)}>Add To Cart</button>
                <button onClick={() => this.addCart(2)}>Add To Cart</button>
                <button onClick={() => this.addCart(3)}>Add To Cart</button>
                { this.state.isCart ? <Cart pID ={this.state.pId} qty ={this.state.qty}/>:null}
                { !this.state.isCart ? <p>cart has been removed</p>:null}
                <button onClick={this.removeCart}>Remove Cart</button>
            </div>
        )
    }
}
export default Product