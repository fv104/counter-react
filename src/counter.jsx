import React from 'react'

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {count: Number(props.from) || 0};
    }
    increment(){
        let amountIncrement = Number(this.props.amount) || 1;
        if(!this.props.max || this.state.count +amountIncrement <= this.props.max){
            this.setState({count: this.state.count + amountIncrement});
        }else{
            this.setState({count: Number(this.props.from) || 0});
        }

    }
    render(){
        return <div onClick={ () => this.increment()}>
            <h3>{this.state.count}</h3>
            <pre>{JSON.stringify(this.props)}</pre>
        </div>;
    }
}

export default Counter;