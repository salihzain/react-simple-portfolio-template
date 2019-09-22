import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import TitleBar from '../components/TitleBar';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const PostPreview = ({ post }) => {
    return (
        <div className="col-sm-4 card-custom">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.preview}</p>
                    <Link to={`/blog/${post.link}`} >Go to Post</Link>
                </div>
            </div>
        </div>
    )
}

class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        if (this.props.posts) {
            return (
                <div className="container pushdown">
                    <TitleBar title="My thoughts" />
                    <div className="row pushdown">
                        {_.values(this.props.posts).map((post, index) => {
                            return <PostPreview post={post} key={index} />
                        })}
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

export default withRouter(connect(mapStateToProps, { fetchPosts })(Posts)); 
