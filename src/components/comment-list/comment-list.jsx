

import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CommentItem from '../comment-item/comment-item'
import './commentList.css'


export default class CommentList extends Component{

    // 添加static后， 表明是给组件类指定属性
    static protoTypes = {
        comments: PropTypes.array.isRequired,
    }


    render(){

        // CommentList 这个组件 有一个 属性 叫做 comments
        // 有一些值在props里面，可以通过这个方法取出来

        const {comments,deleteComment} = this.props
        const display = comments.length===0 ? 'block':'none'

        return(
            <div className="col-xs-12">

                <h3 className="reply">Reply Area</h3>
                <h2 style={{display}}>There is no comments now.</h2>
                <ul className="list-group">
                    {
                        // 对这个数组进行map循环，返回值 可以为一个叫做 CommentItem的组件，变量comment传给了comment
                        // 给commentItem 建立了一个属性叫做 comment，将变量comment传给它。然后在item中，可以使用
                        comments.map((comment,index)=>
                            <CommentItem comment={comment} key={index} index={index}/>)
                    }
                </ul>
            </div>
        )
    }
}

// CommentList.protoTypes = {
//     comments: PropTypes.array.isRequired
// }
// 使用上述做法