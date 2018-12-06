
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'


export default class Main extends Component{

    static propTypes = {
        searchName:PropTypes.string.isRequired
    }

    state = {
        initView: true,
        loading: false,
        users:null,
        errMsg:null
    }



    // 当组件接受到新的属性时候，你想回调
    componentWillReceiveProps(nextProps){
        const searchName = nextProps.searchName

        // 更新状态， 请求中
        this.setState({
            initView:false,
            loading:true
        })

        // 发送ajax请求

        // const url = 'https://api.github.com/search/users?q=${searchName}'
        const url = 'https://api.github.com/search/users?q=' + searchName

        console.log('url is: ' + url)

        axios.get(url)

            .then(response =>{
                //得到响应数据，更新成功状态
                const result = response.data
                console.log(result)
                const users = result.items.map(item => (
                    {name:item.login,url:item.html_url,avatarUrl:item.avatar_url}
                    ))
                this.setState({
                    loading:false,
                    users
                })
            })
            .catch(err =>{

                //更新失败状态
                this.setState({
                    loading:false,
                    errMsg:err.message
                })
            })
    }


    render(){

        const {initView,loading,users,errMsg} = this.state


        if(initView){
            return <h2>Please enter key word to search</h2>
        }else if(loading){
            return <h2>Loading...</h2>
        }else if(errMsg){
            return <h2>{errMsg}</h2>
        }else if(users){
            return(
                <div className="row" >
                    {
                        users.map((user,index)=> (
                            <div className="card" key={index}>
                                <a href={user.url} target="_blank">
                                <img src={user.avatarUrl} style={{width: 100}}/>
                                 </a>
                            <p className="card-text">{user.name}</p>
                             </div>))
                    }
                </div>
            )
        }
    }
}