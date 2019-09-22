import React from 'react';
import TitleBar from './TitleBar';

const ListItem = ({ itemTitle, itemBody, itemDate }) => {

    return (
        <span className="list-group-item list-group-item-action flex-column align-items-start">
            <small>{itemDate}</small>
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{itemTitle}</h5>
            </div>
            <p className="mb-1">{itemBody}</p>
        </span>
    )

}

const Section = ({ title, listItems }) => {
    return (
        <div className="container pushdown">
            <TitleBar title={title} />
            <div className="row ">
                <div className="col-md-2">
                </div>

                <div className="col-md-8 pushdown">
                    <div className="list-group pushdown">
                        {listItems.map((item, index) => {
                            return (
                                <ListItem itemTitle={item.title} itemBody={item.body} itemDate={item.period} key={index} />
                            )

                        })}
                    </div>
                </div>

                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default Section; 
