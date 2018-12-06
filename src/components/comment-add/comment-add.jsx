

import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class CommentAdd extends Component{

    static propTypes ={
        addComment: PropTypes.func.isRequired
    }

    state ={
        username:'',
        content:''
    }

    handleSubmit = () => {
        // 收集数据，并封装成comment对象
        const comment = this.state

        // 更新数组
        this.props.addComment(comment)

        //清除输入数据
        this.setState({
            username:'',
            content:''
        })

    }

    // 下面是固定写法，如何从input中取值
    handleNameChange = (event) =>{
        const username = event.target.value
        this.setState({username})
    }

    handleContentChange =(event) =>{
        const content = event.target.value
        this.setState({content})
    }

    render(){
        const {username,content} = this.state
        return(
            <div className="col-xs-12">
                <div style={{margin:'0 0 20px 0'}}>
                    <h3>Comment Area</h3>
                </div>
                <div className="col-xs-6">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label>User Name:</label>
                            <input type="text" className="form-control" placeholder="User Name"
                                   value={username} onChange={this.handleNameChange}/>
                        </div>
                        <div className="form-group">
                            <label>Comment Content</label>
                            <textarea className="form-control" rows="6" placeholder="Comment Content" value={content} onChange={this.handleContentChange} ></textarea>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-xs-6">

                </div>


            </div>
        )
    }
}

