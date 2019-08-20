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

    onRemove = (obj) => {
        const { dispatch } = this.props
        dispatch(removeTodo(obj))
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
                        {this.props.resp.map(res => {
                            return (

                                <li className='li'>{res.obj}<button className='bt' onClick={() => this.onRemove(res.obj)}>Remove</button></li>

                            )
                        })}
                    </ul>

                </div>
            </div>
        )
    }
}

function mapStateToProps({ addTodo }) {
    const resp = Object.values(addTodo).map(res => res)
    const polo = addTodo

    return {
        resp,
        polo
    }
}

export default connect(mapStateToProps)(Todo)
