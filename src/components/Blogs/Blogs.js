import React from 'react';

const Blogs = () => {
    return (
        <div className='m-3'>
            <h5>Question 1: Describe context api.</h5>
            <p>Answer: We can pass value by props. If we need to send a value on another component then we use props. But sometime we need to send value via more components then send value next component then next component this is way to go at the destination component that call props drilling. But we can send data by useing context api. For context api, set up context api in parent component and use this component value direct on child component</p>

            <h5>Question 1: Describe context api.</h5>

        </div>
    );
};

export default Blogs;