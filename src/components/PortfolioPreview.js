import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const PortfolioPreviewItem = ({ thumbImg, link }) => {
    return (
        <div className="col-sm-4 card-custom">
            <div>
                <div className=" port-item">
                    <img className="card-img-top port-thumb" src={thumbImg} alt={link} />
                    <div className="middle">
                        <Link to={link} className="btn btn-primary">View Work</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const PortfolioPreview = ({ work, activeCat }) => {
    const workArray = _.values(work);
    if (activeCat === 'All') {
        return (
            <div className="row">
                {
                    workArray.map((workItem, index) => {
                        return <PortfolioPreviewItem thumbImg={workItem.thumbImg} link={`/work/${workItem.link}`} key={index} />
                    })
                }
            </div>
        )
    }

    return (<div className="row">
        {
            workArray.filter(workItem => workItem.category === activeCat).map((workItem, index) => {
                return <PortfolioPreviewItem thumbImg={workItem.thumbImg} link={`/work/${workItem.link}`} key={index} />
            })
        }
    </div>)
}

export default PortfolioPreview; 
