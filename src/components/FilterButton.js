import React from 'react';

const FilterButton = ({
    iconName,
    btnText,
    onFilter
}) => (
    <button onClick={onFilter} className="cal-Button cal-Button--primary">
        <span className={`cal-Icon cal-Button__Icon cal-Icon--${iconName}`}></span>
        {btnText}
    </button>
)

export default FilterButton;