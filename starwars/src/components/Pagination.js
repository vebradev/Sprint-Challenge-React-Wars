import React from 'react';

const Pagination = props => {
    return (
        <div className="pagination">
            <button className="prev" onClick={props.previous}>Previous</button>
            <button className="next" onClick={props.next}>Next</button>
        </div>
    );
}

export default Pagination;