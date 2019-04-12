import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Layout from './app/layouts/layout';
import MainPage from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';
import Users from './app/pages/Users';
import Posts from './app/pages/Posts';
import User from './app/pages/User';
import Post from './app/pages/Post';
import Comments from './app/pages/Comments';
import Comment from './app/pages/Comment';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={MainPage}/>
            <Route path="users" component={Users}>
                <Route path=":userId" component={User}/>
            </Route>
            <Route path="posts" component={Posts}>
                <Route path=":id" component={Post}/>
            </Route>
            <Route path="comments" component={Comments}>
                <Route path=":id" component={Comment}/>
            </Route>
            <Route path="*" component={PageNotFound}/>
        </Route>
    </Router>, document.querySelector('#app'));