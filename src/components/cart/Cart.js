import React,{Component} from 'react';

class Cart extends Component{

    constructor(props){
        super(props);
        console.log("cart constructor call")
        this.state = {qty :this.props.qty}
    }

    //this method execute state depends on props
    static getDerivedStateFromProps(props,state){
        if(props.qty !== state.qty){
            return {qty : props.qty}
        }
        return null;
    }
   //this method is excute when new props and state received
    shouldComponentUpdate(nextProps,nextState){
        if(this.props.qty !== nextProps.qty){
            console.log("shhouled component updated")
            return true
        }
        return false;
    }

    componentDidMount(){
        console.log("Exxecute After Component render in the DOM")
    }

    //this method is called when the changes in component or rerender the component
    componentDidUpdate(prevProps,prevState){
        console.log("Component Updated...");
    }

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillUnmount() {
        console.log("component destroyed")
    }
   
    render(){
        return(
            <div>
                <h2>Cart{this.state.qty}</h2>
            </div>
        )
    }
}

export default Cart