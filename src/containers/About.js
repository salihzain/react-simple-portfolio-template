import React, { Component } from 'react';
import { fetchItems } from '../actions';
import _ from 'lodash';
import Section from '../components/Section';
import Skills from '../components/Skills';
import MediumImageGrid from '../components/MediumImageGrid';
import GroupButtons from '../components/GroupButtons';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class About extends Component {
    componentWillMount() {
        this.props.fetchItems();
    }

    render() {
        if (this.props.about) {
            return (
                <div>
                    <Section title="quick facts about me" listItems={_.values(this.props.about.quickFacts)} />
                    <Skills title="Things that I can do" skills={_.values(this.props.about.skills)} />
                    <Section title="Work Experience" listItems={_.values(this.props.about.work)} />
                    <Section title="Education" listItems={_.values(this.props.about.education)} />
                    <MediumImageGrid title="Places I have visited" GridItems={_.values(this.props.about.travel)} />
                    <MediumImageGrid title="Featured on" GridItems={_.values(this.props.about.press)} />
                    <GroupButtons title="Formal Resume" buttons={_.values(this.props.about.links)} />
                </div>
            )
        }

        return <div> empty </div>
    }
}

function mapStateToProps({ about }) {
    return about;
}

export default withRouter(connect(mapStateToProps, { fetchItems })(About));
