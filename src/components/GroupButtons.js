import React from 'react';
import TitleBar from './TitleBar';
import Button from './Button';

const GroupButtons = ({ title, buttons }) => {
    return (
        <div className="container pushdown">
            <TitleBar title={title} />
            <div className="row pushdown">
                <div className="col-md-4">
                </div>
                <div className="col-md-4 justify-content-center">
                    {buttons.map((button, index) => (
                        <Button text={button.text} url={button.url} key={index} />
                    ))}
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}

export default GroupButtons; 