

import React, {Component} from 'react'
// import Datetime from '../DateTime'
// import TimePicker from 'rc-time-picker'

import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'
import CurrentTime from '../current-time/current-time'

import PubSub from 'pubsub-js'




export default class App extends Component{

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         comments:[
    //             {username:'Tom', content:'React looks like good.'},
    //             {username:'Tom', content:'React is difficult.'}
    //         ]
    //     }
    // }

    // 给组件对象添加 state 属性, 可以替代上述写法
    state = {
        comments:[
            {username:'Tom', content:'React looks like good.'}
        ],
        countryZoneTime:[
            {countryName:'Guangzhou',timeZone:8},
            {countryName:'Melbourne',timeZone:11},
            {countryName:'Silicon Valley',timeZone:-8},
            {countryName:'Lodon',timeZone:0}
        ]
    }
    // 上： comments里面放的是 对象

    addComment = (comment) =>{
        const {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
    }


    // componentDidMount(){
    //     PubSub.subscribe('deleteComment', (msg,index)=>{
    //         this.deleteComment(index)
    //     })
    // }
    //
    //
    // //删除评论
    // deleteComment = (index) =>{
    //     const {comments} = this.state
    //     comments.splice(index,1)
    //     this.setState({comments})
    // }


    //上述2个函数换一个写法：

    componentDidMount(){
        PubSub.subscribe('deleteComment', this.deleteComment)
    }


    //删除评论
    deleteComment = (msg,index) =>{
        const {comments} = this.state
        comments.splice(index,1)
        this.setState({comments})
    }




    render(){

        // 获取到 状态中的 comments这个数组，然后传给commentList
        const {comments,countryZoneTime} = this.state

        return(
            <div id="app">
                <div>
                    <header className="site-header jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-6">
                                    <div>
                                        <h3>Timezone</h3>
                                    </div>
                                    <div>
                                        <CurrentTime countryZoneTime={countryZoneTime}/>
                                    </div>
                                </div>
                                <div className="col-xs-6">
                                    <CommentAdd addComment={this.addComment}/>
                                    <CommentList comments={comments}/>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        )
    }
}

