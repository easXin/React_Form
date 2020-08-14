import React,{Component} from 'react'

import CommentAdd from "../comment-add/comment-add"
import CommentList from "../comment-list/comment-list"

class App extends Component {
    // 给对象指定 state v1.0
    /*constructor(props){
            super(props)
            this.state = {
                comments:[
                    {username:'Tom', content:'O(∩_∩)O'},
                    {username:'Jack', content:'/(ㄒoㄒ)/~~'}
                ]
            }
        }*/
    // 给对象指定 state v2.0
    state = {
        comments: [
        { username: "Tom", content: "React还行" },
        { username: "Jack", content: "React好难" }
        ],
    };
    render() {
        const { comments } = this.state;
        return (
        <div>
            <header className="site-header jumbotron">
            <div className="container">
                <div className="row">
                <div className="col-xs-12">
                    <h1>请发表对React的评论</h1>
                </div>
                </div>
            </div>
            </header>
            <div className="container">
            <CommentAdd />
            <CommentList comments={comments} />
            </div>
        </div>
        );
    }
}


export default App;