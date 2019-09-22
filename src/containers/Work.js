import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWork } from '../actions';
import { withRouter } from 'react-router-dom';
import Filter from './Filter';
import PortfolioPreview from '../components/PortfolioPreview';
import TitleBar from '../components/TitleBar';

class Work extends Component {
    componentWillMount() {
        this.props.fetchWork();
    }

    render() {
        if (this.props.work) {
            const work = this.props.work;
            const activeCat = this.props.activeCat;

            return (<div className="container pushdown">
                <TitleBar title="Portfolio" />
                <Filter />
                <PortfolioPreview work={work} activeCat={activeCat} />
            </div>)
        }

        return <div></div>
    }
}

function mapStateToProps({ work, activeCat }) {
    return {
        work: work.work,
        activeCat
    };
}

export default withRouter(connect(mapStateToProps, { fetchWork })(Work)); 
