import React from 'react';

const Scroll = (props) => {
    return (
        // in jsx style is added inline using doublt{}
        <div style = {{ overflow: 'scroll', border: '5px solid black', height: '500px'}}>
           { props.children}
        </div>    
    );
}

export default Scroll;