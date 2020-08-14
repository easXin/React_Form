import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
        static propTypes = {
            setSearchName: PropTypes.func.isRequired,
        };
        search = () => {
            const name = this.input.value.trim()
            if(name){
                this.props.setSearchName(name);
            }
            
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