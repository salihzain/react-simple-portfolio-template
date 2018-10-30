import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
import { withRouter } from 'react-router-dom';

class Post extends Component {
    componentWillMount() {
        this.id = this.props.match.params.id;
        this.props.fetchPosts();
    }

    render() {
        if (this.props.posts) {
            const post = this.props.posts[this.id];
            if (!post) {
                return <div>post doesn't exist</div>
            }
            return (
                <div className="container pushdown">
                    <div className="row pushdown">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <h3>{post.title}</h3>
                            <small>Posted on: {post.date.toString()}</small>
                            <p className="body-text">
                                {renderHTML(post.body)}
                            </p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            )
        }
        return <div></div>
    }
}

function mapStateToProps({ posts }) {
    return posts;
}


export default withRouter(connect(mapStateToProps, { fetchPosts })(Post));
