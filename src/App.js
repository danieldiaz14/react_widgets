import React from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search';
const items = [
    {
        title: 'What is React?',
        content: 'React is a front end Javascript Framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'Just use it dude'
    }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="ui container">
            {/* <Accordion items={items}/> */}
            <div className="ui container">
                <Search/>
            </div>
        </div>
    )
}