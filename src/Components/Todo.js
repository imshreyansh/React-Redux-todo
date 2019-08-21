import React, { Component } from 'react'
import './todo.css'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from '../action/add'
class Todo extends Component {
    state = {
        data: ""
    }

    onSubmit = () => {

        const { dispatch, polo } = this.props
        const { data } = this.state
        console.log(data)
        dispatch(addTodo(data, polo))
    }

    onRemove = (id, val) => {

        const { dispatch } = this.props
        dispatch(removeTodo(id, val))
    }
    render() {
        return (
            <div className='comp'>
                <div className="form">
                    <label className='text'>
                        Todo:
                    <input className="lab" type="text" name="name" onChange={e => this.setState({ data: e.target.value })} />
                    </label>
                </div>
                <div className='buttonDiv'>
                    <button className='btn' onClick={() => this.onSubmit()}>Submit</button>
                </div>
                <div>
                    <ul className='ul'>
                        {this.props.resp.map((res, index) => {

                            return (

                                <li key={index} className='li'>{res[1]}<button className='bt' onClick={() => this.onRemove(res[0], res[1])}>Remove</button></li>

                            )
                        })}
                    </ul>

                </div>
            </div>
        )
    }
}

function mapStateToProps({ addTodo }) {
    const resp = Object.entries(addTodo).map(res => res)
    const polo = addTodo
    return {
        resp,
        polo
    }
}

export default connect(mapStateToProps)(Todo)
