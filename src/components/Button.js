import React from 'react';



const Button = ({ text, url }) => {
    function goToPage() {
        window.open(url, false);
    }
    return (
        <button onClick={goToPage} type="button" className="btn btn-outline-primary float-md-left custom-skill">{text}</button>
    )
}

export default Button; 