import React from 'react';

const Pagination = props => {
    return (
        <div className="pagination">
            <button onClick={props.previous}>Previous</button>
            <button onClick={props.next}>Next</button>
        </div>
    );
}

export default Pagination;