import React, { Component } from "react"
import PropTypes from "prop-types"

import './comment-item.css'

class CommentItem extends Component {
 static propTypes = {
        comment:PropTypes.object.isRequired,
        deleteComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    };
    handleDelete=()=>{
        const{comment,deleteComment,index}= this.props
        if(window.confirm(`Are you absolutely sure going to delete ${comment.username}'s comment`)){
            deleteComment(index)
        }
    }

    render() {
        const{comment} = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.handleDelete}>删除</a>
                </div>
                <p className="user">
                    <span>{comment.username}</span>
                    <span>说:</span>
                </p>
                <p className="sentence">{comment.content}</p>
            </li>
        );
    }
}

export default CommentItem;

