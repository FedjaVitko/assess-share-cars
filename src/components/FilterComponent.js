import React, { Component } from 'react';

import FilterButton from './FilterButton';

const FilterComponent = ({
    onFilter
}) => (
        <div className="flex-center" style={{marginTop: '3em'}}>
            <FilterButton onFilter={onFilter} iconName="people" btnText="Driver ID"/>
            <FilterButton onFilter={onFilter} iconName="car" btnText="Car ID"/>
        </div>
    )

export default FilterComponent;