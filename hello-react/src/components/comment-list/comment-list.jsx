import React, { Component } from "react"
import PropTypes from "prop-types"

import CommentItem from "../comment-item/comment-item"
import './comment-list.css'


class CommentList extends Component {
    // 接收的属性 v2.0
    static propTypes = {
        comments: PropTypes.array.isRequired
    }

    render() {
        const{comments} = this.props
        return (
        <div className="col-md-8">
            <h3 className="reply">评论回复：</h3>
            <h2 style={{ display: "none" }}>暂无评论，点击左侧添加评论！！！</h2>
            <ul className="list-group">
                {
                    // 数组转成标签一定要加Key 避免警告
                    comments.map((comment,index) => <CommentItem comment={comment} key={index}/>)
                }
            </ul>
        </div>
        );
    }
}


// 接收的属性 v1.0
// CommentList.prototype = {
//     comments: PropTypes.array.isRquire
// };
export default CommentList;
