

import React, {Component} from 'react'
import PropTypes from 'prop-types'


// 将生命周期方法添加到类中
// 在具有许多组件的应用程序中，在销毁时释放组件所占用的资源非常重要。
// 每当 Clock 组件第一次加载到 DOM 中的时候，我们都想生成定时器，这在 React 中被称为挂载。
// 同样，每当 Clock 生成的这个 DOM 被移除的时候，我们也会想要清除定时器，这在 React 中被称为卸载。
// 我们可以在组件类上声明特殊的方法，当组件挂载或卸载时，来运行一些代码：




export default class CurrentTime extends Component{

    // 添加static后， 表明是给组件类指定属性
    // state = {
    //     date:''
    // }

    static propTypes ={
        countryZoneTime: PropTypes.array.isRequired
    }


    // componentDidMount(i){
    //     this.timerID = setInterval(
    //         () => this.tick(i), 1000
    //     )
    // }
    //
    // componentWillUnmount(){
    //     clearInterval(this.timerID)
    // }
    //
    // tick(i){
    //     let d = new Date()
    //     let len = d.getTime()
    //     let offset = d.getTimezoneOffset()*60000
    //     let utcTime = len+offset
    //     this.setState({date:new Date(utcTime+3600000*i)})
    // }

    render(){

        // const currentDate = new Date();
        const {countryZoneTime} = this.props

        return(
           /*<div style={{height:'60px',background:'lightyellow'}}>*/
            <div>
               <span>{}</span>
               {/*<span >{this.state.date.toLocaleString()}</span>*/}
               {/*<span >{this.state.date.toLocaleDateString()}</span>*/}
               {/*<span >{this.state.date.toLocaleTimeString()}</span>*/}
               {/*<span>{currentDate.getFullYear()}-</span>*/}
               {/*<span>{currentDate.getMonth()}-</span>*/}
               {/*<span>{currentDate.getDate()}  </span>*/}
               {/*<span>{currentDate.getHours()}:</span>*/}
               {/*<span>{currentDate.getMinutes()}:</span>*/}
               {/*<span>{currentDate.getSeconds()}</span>*/}


               <div>
                   <ul className="list-group">
                       {
                           // 对这个数组进行map循环，返回值 可以为一个叫做 CommentItem的组件，变量comment传给了comment
                           // 给commentItem 建立了一个属性叫做 comment，将变量comment传给它。然后在item中，可以使用
                           countryZoneTime.map((countryZoneTime,index)=> <TimeZoneCard key={index} countryZoneTime={countryZoneTime}/>)
                       }
                   </ul>
               </div>


           </div>
        )
    }
}

class TimeZoneCard extends Component{

    state = {
        date:''
    }
    static propTypes ={
        countryZoneTime: PropTypes.object.isRequired,
    }

    componentDidMount(){

        const i = this.props.countryZoneTime.timeZone

        this.timerID = setInterval(
            () => this.tick(i), 1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(i){
        let d = new Date()
        let len = d.getTime()
        let offset = d.getTimezoneOffset()*60000
        let utcTime = len+offset
        this.setState({date:new Date(utcTime+3600000*i)})
    }

    render(){

        const {countryZoneTime} = this.props
        return(
            <li style={{background:'#FFF0F0',margin:'20px 0px'}}>
                <p>CountryName: {countryZoneTime.countryName}</p>
                <p>CurrentTime: {this.state.date.toLocaleString()}</p>
            </li>
        )
    }
}


// CommentList.protoTypes = {
//     comments: PropTypes.array.isRequired
// }
// 使用上述做法