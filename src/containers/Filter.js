import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCats, setActiveCat } from '../actions';
import _ from 'lodash';


class Filter extends Component {
    componentWillMount() {
        this.props.fetchCats();
    }

    render() {
        if (this.props.cats) {
            const cats = this.props.cats.cats;
            return (
                <div className="row justify-content-center pushdown">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <div className="input-group pushdown">
                            <select className="custom-select" id="inputGroupSelect04" value={this.value} onChange={this.props.setActiveCat}>
                                {_.values(cats).map(cat => {
                                    return <option value={cat} key={`options-${cat}`}>{cat}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>

                </div>
            )
        }
        return <div>cats not fetched</div>;

    }
}




function mapStateToProps(state) {
    const data = {
        cats: state.cats,
        activeCat: state.activeCat
    }
    return data;
}

export default withRouter(connect(mapStateToProps, { fetchCats, setActiveCat })(Filter))


