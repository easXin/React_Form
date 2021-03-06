import React,{Component} from 'react'

import CommentAdd from "../comment-add/comment-add"
import CommentList from "../comment-list/comment-list"

class App extends Component {
    // 给对象指定 state v2.0
    state = {
        comments: []
    };
    addComment = (comment) =>{
        const {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
    }
    deleteComment = (index) =>{
        const {comments} = this.state
        comments.splice(index,1)
        this.setState({comments})
    }
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
                <CommentAdd addComment={this.addComment} />
                <CommentList
                    comments={comments}
                    deleteComment={this.deleteComment}
                />
                </div>
            </div>
        );
    }
}


export default App;