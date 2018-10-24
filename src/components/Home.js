import React from 'react';
import { Link } from 'react-router-dom';

const HomeNavItem = ({ navItem }) => {
    return <Link to={navItem.link} className="list-group-item list-group-item-action">{navItem.text}</Link>

}

const Home = ({ navs }) => {
    return (
        <div className="container ">
            <div className="row subtitle justify-content-center">
                <h4>Hi! I'm Salih! Welcome to my website!</h4>
            </div>
            <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-4 pushdown">
                    <img alt="profile" src={require('../static_data/profile_pic.JPG')} className="center img-rounded" />
                    <br />
                    <h6 className="text-center">Here's what you can do:</h6>
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