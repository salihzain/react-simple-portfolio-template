import React, { Component } from 'react';
import { fetchWork } from '../actions';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class WorkItem extends Component {
    componentWillMount() {
        this.id = this.props.match.params.id;
        this.cat = this.props.match.params.cat;
        this.props.fetchWork();
    }

    render() {
        if (this.props.work) {
            const group = this.props.work;
            const workItem = group[this.id];

            if (!workItem) {
                return <div>post doesn't exist</div>
            }

            return (
                <div className="container pushdown">
                    <div className="row pushdown">
                        <div className="col-md-2"></div>

                        <div className="col-md-8">
                            <h3>{workItem.title}</h3>
                            <p className="body-text">
                                <Link to={`/work/${workItem.category}/${workItem.link}`}>Go</Link>
                                {renderHTML(workItem.body)}
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

function mapStateToProps({ work }) {
    return work;
}

export default withRouter(connect(mapStateToProps, { fetchWork })(WorkItem));
