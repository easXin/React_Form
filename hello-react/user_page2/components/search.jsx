import React,{Component} from 'react'
import PropTypes from 'prop-types'
import PubSub from "pubsub-js";

export default class Search extends Component {

        search = () => {
            const searchName = this.input.value.trim();
            if (searchName) {
                // 发布
              PubSub.publish("search", searchName);
            }
            // 消息名 回调函数
        };
        render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="enter the name you search"
                    ref={input =>this.input=input}
                />
                <button onClick={this.search}>Search</button>
            </div>
        );
    }
}