import React from 'react';
import PostsList from '../components/PostsList';

export default class Posts extends React.Component{
    render(){
        return (
            <div>
                {
                    (!this.props.chidren) ?
                    (<PostsList/>)
                    :
                    (this.props.children)
                }
            </div>
            
        );
    }
}
