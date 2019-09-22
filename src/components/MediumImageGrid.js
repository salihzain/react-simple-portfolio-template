import React from 'react';
import TitleBar from './TitleBar';

const GridItem = ({ thumbImg, title, link }) => {
    return (
        <div className="col-sm-3 card-custom">
            <div>
                <div className="port-item">
                    <a href={link}>
                        <img className="card-img-top port-thumb" src={thumbImg} alt={title} />
                    </a>

                    <div className="middle">
                        <h6>{title}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MediumImageGrid = ({ title, GridItems }) => {
    return (
        <div className="container pushdown">
            <TitleBar title={title} />

            <div className="row">
                <div className="col-md-2">
                </div>

                <div className="col-md-8 pushdown">
                    <div className="row">
                        {GridItems.map((gridItem, index) => {
                            return (<GridItem thumbImg={gridItem.thumbImg} title={gridItem.title} link={gridItem.link} key={index} />)
                        })}
                    </div>
                </div>

                <div className="col-md-2"></div>
            </div>

        </div>
    )
}

export default MediumImageGrid; 
