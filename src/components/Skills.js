import React from 'react';
import TitleBar from './TitleBar';

const Skill = ({ skill }) => {
    return (<span className="btn btn-outline-secondary custom-skill">{skill.text}</span>
    )
}

const Skills = ({ title, skills }) => {
    return (
        <div className="container pushdown">
            <TitleBar title={title} />
            <div className="row pushdown">
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                    {skills.map((skill, index) => {
                        return (<Skill skill={skill} key={index} />)
                    })}
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}


export default Skills; 