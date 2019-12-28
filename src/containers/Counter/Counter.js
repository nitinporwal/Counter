import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions'

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                this.setState({});
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter( 5 )} />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubCounter( 5 )} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
                    Store Result
                </button>
                <ul>
                    {this.props.storedResuts.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        storedResuts: state.res.results
    };
}   

const mapDispachToProps = dispach => {
    return {
        onIncrementCounter: () => dispach({type: actionType.INCREMENT}),
        onDecrementCounter: () => dispach({type: actionType.DECREMENT}),
        onAddCounter: (val) => dispach({type: actionType.ADD, val: val}),
        onSubCounter: (val) => dispach({type: actionType.SUBRACT, val: val}),
        onStoreResult: (result) => dispach({type: actionType.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispach({type: actionType.DELETE_RESULT, id: id})
    };
}

export default connect(mapStateToProps, mapDispachToProps)(Counter);