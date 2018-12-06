

import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './commentItem.css'



export default class CommentItem extends Component{

    static propTypes = {
        comment:PropTypes.object.isRequired,
        deleteComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    }

    handleClick = () => {
        // 提示确定后，再删除
        const {deleteComment,index} = this.props
        if(window.confirm('确定删除的评论')){
            deleteComment(index)
        }
    }

    render(){

        const {comment} = this.props

        return(
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.handleClick}>Delete</a>
                </div>
                <p className="user"><span >{comment.username}</span><span> Say:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}

