import React from 'react';
import CommentsList from '../components/CommentsList';

export default class Comments extends React.Component{
    render(){
        return (
            <div>
                {
                    (!this.props.chidren) ?
                    (<CommentsList/>)
                    :
                    (this.props.children)
                }
            </div>
            
        );
    }
}
