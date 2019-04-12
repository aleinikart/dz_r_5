import React from 'react';
import {Link} from 'react-router';

export default class Comment extends React.Component{
    render(){
        return (
            <article className="card border-secondary mb-3">
                <h2 className="card-header">{this.props.name}</h2>
                <div className="card-body text-secondary">
                    <p>{this.props.body}</p>
                    <p>От: {this.props.email}</p>
                    <p><Link to={`/comment/${this.props.id}`}>Подробнее</Link></p>
                </div>
            </article>
        );
    }
}
