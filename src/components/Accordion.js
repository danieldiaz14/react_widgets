import React, { useState } from 'react';

const Accordion = ({ items }) =>  {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => setActiveIndex(index);

    const renderItems = () => items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
        const { title, content } = item;
        return (
            <React.Fragment key={title}>
                <div 
                className={`title ${active}`}
                onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"/>
                    {title}
                </div>
                <div className={`content ${active}`}>{content}</div>
             
            </React.Fragment>
        )
    })
    return (
        <div>
            <div className="ui styled accordion">
                {renderItems()}
            </div>
        </div>
    )
}

export default Accordion;