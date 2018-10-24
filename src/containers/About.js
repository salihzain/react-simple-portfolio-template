import React, { Component } from 'react';
import { fetchItems } from '../actions';
import store from '../store';
import _ from 'lodash';
import Section from '../components/Section';
import Skills from '../components/Skills';
import MediumImageGrid from '../components/MediumImageGrid';
import GroupButtons from '../components/GroupButtons';


class About extends Component {
    constructor() {
        super();
        this.about = store.getState().about;
    }

    componentWillMount() {
        store.dispatch(fetchItems());
        this.about = store.getState().about;
        console.log(this.about.skills);
    }

    render() {
        return (
            <div>
                <Section title="quick facts about me" listItems={_.values(this.about.quickFacts)} />
                <Skills title="Things that I can do" skills={_.values(this.about.skills)} />
                <Section title="Work Experience" listItems={_.values(this.about.work)} />
                <Section title="Education" listItems={_.values(this.about.education)} />
                <MediumImageGrid title="Places I have visited" GridItems={_.values(this.about.travel)} />
                <MediumImageGrid title="Featured on" GridItems={_.values(this.about.press)} />
                <GroupButtons title="Formal Resume" buttons={_.values(this.about.links)} />
            </div>
        )



    }
}

export default About; 
