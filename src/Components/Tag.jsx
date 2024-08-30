import React from "react";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
    const tagStyle = {
        MonthlyBudget: { backgroundColor: "#fda821" },
        MealPlanner: { backgroundColor: "#15d4c8" },
        TravelPlanner: { backgroundColor: "#ffd12c" },
        JobInterview: { backgroundColor: "#4cdafc" },
        default: { backgroundColor: "#f9f9f9" },
    };
    return (
        <button
            type='button'
            className='tag'
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    );
};

export default Tag;
