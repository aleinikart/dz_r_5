import React from 'react';
import axios from 'axios';
import PostItem from '../components/Post';

export default class Post extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            post: null
        }
    }
    render(){
        return (
            <div>
                {this.state.post && <PostItem {...this.state.post}/>}
            </div>
        );
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.id}`)
        .then(response => {
            this.setState({post: response.data});
        })
    }
}

