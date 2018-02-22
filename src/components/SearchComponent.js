import React from 'react';

const SearchComponent = ({
    onChange,
}) => (
    <div>
        <input className="cal-Input cal-Input--has-icon" placeholder="Enter Driver's ID" style={{marginLeft: '4.5em'}} onChange={onChange} />
    </div>
)

export default SearchComponent;