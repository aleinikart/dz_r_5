import React from 'react';
import axios from 'axios';
import CommentItem from '../components/Comment';

export default class Comment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            post: null
        }
    }
    render(){
        return (
            <div>
                {this.state.post && <CommentItem {...this.state.post}/>}
            </div>
        );
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.params.id}`)
        .then(response => {
            this.setState({comment: response.data});
        })
    }
}

