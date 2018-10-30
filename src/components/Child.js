import React from 'react';
import { posts } from '../static_data/static-data';
import _ from 'lodash';

const Child = ({ match }) => {
    const id = match.params.id;
    const cat = match.params.cat;
    console.log("id is", id);
    return (
        <div>
            {console.log("in child", _.values(posts[id]))}
            {_.values(posts)[match.params.id]}
            <h3>ID: {id}</h3>
            <h3>Cat: {cat}</h3>
        </div>
    )
}





export default Child; 