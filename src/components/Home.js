import React from 'react';
import { Link } from 'react-router-dom';
import TitleBar from './TitleBar';

const HomeNavItem = ({ navItem }) => {
    return <Link to={navItem.link} className="list-group-item list-group-item-action">{navItem.preview}</Link>
}

const Home = ({ navs, firstLine, secondLine, thirdLine }) => {
    return (
        <div className="container ">
            <TitleBar title="Hi I'm Salih! Welcome to my website!" />
            <div className="row">
                <div className="col-md-4">
                </div>

                <div className="col-md-4 pushdown">
                    <img alt="profile" src={require('../static_data/profile_pic.JPG')} className="center img-rounded" />
                    <br />

                    <p className="text-center">{firstLine} <br /> {secondLine} </p>
                    <h6 className="text-center">{thirdLine}</h6>

                    <div className="list-group pushdown">
                        {navs.map((homeNavItem, index) => (
                            <HomeNavItem navItem={homeNavItem} key={index} />
                        ))}
                    </div>

                    <div className="col-md-4">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home; 
