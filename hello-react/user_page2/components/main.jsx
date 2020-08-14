import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import PubSub from 'pubsub-js'
import '../main.css'
export default class Main extends Component{
    state={
        initView: true,
        loading:false,
        users:null,
        errorMsg:null
    }

    componentDidMount(){
        // 消息名， 回调函数 跨域拿数据
        PubSub.subscribe('search',(msg,searchName)=>{
            this.setState({
                initView: false,
                loading: true,
            });
            const url = `https://api.github.com/search/repositories?q=${searchName}`;
            axios
                .get(url)
                .then((response) => {
                const result = response.data;
                console.log(result);
                const users = result.items.map((item) => {
                    return {
                    name: item.owner.login,
                    url: item.owner.html_url,
                    avatarUrl: item.owner.avatar_url,
                    };
                });
                this.setState({
                    loading: false,
                    users,
                });
                })
                .catch((error) => {
                this.setState({
                    loading: false,
                    errorMsg: error.message,
                });
                });
        })
    }

    render(){
        const {initView,loading,users,errorMsg} = this.state
        const {searchName} = this.props

        if(initView){
            return <h2>请输入关键字搜索: {searchName}</h2>
        }else if(loading){
            return <h2>Loading...</h2>
        }else if(errorMsg){
            return <h2>{{errorMsg}}</h2>
        }else{
            return (
              // eslint-disable-next-line

                <div className="row">
                    {users.map((user, index) => (
                    <div className="card" key={index}>
                        <a href={user.url} target="_blank">
                        <img src={user.avatarUrl} style={{ width: "100px", height:"100px"}} />
                        </a>
                        <p className="card-text">{user.name}</p>
                    </div>
                    ))}
                </div>
            );
        }

    }
}