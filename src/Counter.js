import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './actions';

export class Counter extends Component {

  render() {
    return (
      <div>
        <div>
            <div>Contador: {this.props.count}</div>
            <button onClick={() => this.props.increment(5)}>Mais</button>
            <button onClick={() => this.props.decrement(3)}>Menos</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
     count:state.count
})

const mapDispatchToProps = (dispatch) =>{
      return {
          increment:(value) => dispatch(increment(value)),
          decrement:(value) => dispatch(decrement(value))
      } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
